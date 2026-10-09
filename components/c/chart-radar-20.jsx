import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjyhlk1_l.css';
import '../../css/z/zr5giubst.css';
import '../../css/t/tonaopb8e.css';
import '../../css/m/manbawboy.css';
import '../../css/m/m61f7sbux.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjyhlk1_l"/><path class="zr5giubst"/><path class="tonaopb8e"/><path class="manbawboy"/><path class="m61f7sbux"/>`,
		"fallback": "energy-icons:chart-radar-20",
	});
}

export default Component;
