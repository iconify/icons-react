import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkuz4zbxg.css';
import '../../css/s/s3iadibni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lkuz4zbxg"/><path class="s3iadibni"/></g>`,
		"fallback": "tabler:carrot",
	});
}

export default Component;
