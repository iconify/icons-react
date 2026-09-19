import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/t/tgtyq0ann.css';
import '../../css/q/qs2znccyd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="tgtyq0ann"/><path class="qs2znccyd"/>`,
		"fallback": "ant-design:euro-circle-twotone",
	});
}

export default Component;
