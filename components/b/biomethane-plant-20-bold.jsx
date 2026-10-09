import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hty7rib1j.css';
import '../../css/q/qho2-b78i.css';
import '../../css/y/y8ouhcctf.css';
import '../../css/k/k6d1kubof.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hty7rib1j"/><path class="qho2-b78i"/><path class="y8ouhcctf"/><path class="k6d1kubof"/>`,
		"fallback": "energy-icons:biomethane-plant-20-bold",
	});
}

export default Component;
