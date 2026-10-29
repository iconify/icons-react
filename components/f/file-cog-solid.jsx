import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udk7afsfs.css';
import '../../css/a/at4-951so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="udk7afsfs"/><path class="at4-951so wm-s"/></g>`,
		"fallback": "withicons:file-cog-solid",
	});
}

export default Component;
