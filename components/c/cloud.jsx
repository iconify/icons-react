import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qly-mubbi.css';
import '../../css/g/gi96n6otg.css';
import '../../css/d/dnoqkib5j.css';
import '../../css/s/s83651bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qly-mubbi"/><path class="gi96n6otg"/><path class="dnoqkib5j"/><path class="s83651bmm"/></g>`,
		"fallback": "matita:cloud",
	});
}

export default Component;
