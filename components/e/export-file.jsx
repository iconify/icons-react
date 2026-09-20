import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wreu5vbgv.css';
import '../../css/y/ypsug5b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wreu5vbgv"/><path class="ypsug5b7p"/></g>`,
		"fallback": "streamline-ultimate:export-file",
	});
}

export default Component;
