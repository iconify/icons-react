import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/q/qjej4-drs.css';
import '../../css/v/v0gj4fhgi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="qjej4-drs"/><path class="v0gj4fhgi"/>`,
		"fallback": "ant-design:info-circle-twotone",
	});
}

export default Component;
