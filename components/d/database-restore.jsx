import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/io20mvb6s.css';
import '../../css/o/on2rd2rxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="io20mvb6s"/><path class="on2rd2rxh"/></g>`,
		"fallback": "iconoir:database-restore",
	});
}

export default Component;
