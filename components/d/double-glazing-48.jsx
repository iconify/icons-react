import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk-8-cbtr.css';
import '../../css/e/eczeehbxy.css';
import '../../css/d/df1n7oboy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk-8-cbtr"/><path class="eczeehbxy"/><path class="df1n7oboy"/>`,
		"fallback": "energy-icons:double-glazing-48",
	});
}

export default Component;
