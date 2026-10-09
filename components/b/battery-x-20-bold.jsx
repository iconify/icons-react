import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jogeij0zr.css';
import '../../css/k/kwe73qles.css';
import '../../css/v/vivou8bgm.css';
import '../../css/c/cejnnhkdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jogeij0zr"/><path class="kwe73qles"/><path class="vivou8bgm"/><path class="cejnnhkdt"/>`,
		"fallback": "energy-icons:battery-x-20-bold",
	});
}

export default Component;
