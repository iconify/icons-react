import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqh0obcuq.css';
import '../../css/o/oz0-7c0kb.css';
import '../../css/d/dyi9gpb5f.css';
import '../../css/y/yppz-1bcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqh0obcuq"/><path class="oz0-7c0kb"/><path class="dyi9gpb5f"/><path class="yppz-1bcl"/>`,
		"fallback": "energy-icons:carbon-capture-48-bold",
	});
}

export default Component;
