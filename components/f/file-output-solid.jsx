import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uwvpw8bjb.css';
import '../../css/v/v7z8jubih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uwvpw8bjb"/><path class="v7z8jubih wm-a"/></g>`,
		"fallback": "withicons:file-output-solid",
	});
}

export default Component;
