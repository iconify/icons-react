import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eghypdl-x.css';
import '../../css/u/u79pk-b6p.css';
import '../../css/s/sxmjvi9qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eghypdl-x"/><path class="u79pk-b6p"/><path class="sxmjvi9qq"/>`,
		"fallback": "streamline-ultimate:file-code-check-bold",
	});
}

export default Component;
