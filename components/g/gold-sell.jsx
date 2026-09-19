import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a16vnybjj.css';
import '../../css/g/gp0egaclj.css';
import '../../css/x/xxdfd3c6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a16vnybjj"/><circle class="gp0egaclj"/><path class="xxdfd3c6y"/></g>`,
		"fallback": "hugeicons:gold-sell",
	});
}

export default Component;
