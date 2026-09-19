import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/g/gjbusdbhw.css';
import '../../css/i/io6m8-o3i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="gjbusdbhw"/><path class="io6m8-o3i"/>`,
		"fallback": "ant-design:exclamation-circle-twotone",
	});
}

export default Component;
