import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzjn3zb4d.css';
import '../../css/l/li792gxac.css';
import '../../css/p/p2yqjtb5v.css';
import '../../css/e/eqj3blpeq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzjn3zb4d"/><path class="li792gxac"/><path class="p2yqjtb5v"/><path class="eqj3blpeq"/>`,
		"fallback": "energy-icons:factory-emissions-20-bold",
	});
}

export default Component;
