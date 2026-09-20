import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzcyntb8z.css';
import '../../css/x/x7x-jkbhl.css';
import '../../css/b/b0o28ve4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qzcyntb8z"/><path class="x7x-jkbhl"/><path class="b0o28ve4x"/></g>`,
		"fallback": "tabler:arrow-fork-triple",
	});
}

export default Component;
