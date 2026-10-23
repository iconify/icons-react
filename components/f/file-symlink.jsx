import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ls0qtbc6f.css';
import '../../css/r/rpxqwczho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ls0qtbc6f"/><path class="rpxqwczho"/></g>`,
		"fallback": "vadivam:file-symlink",
	});
}

export default Component;
