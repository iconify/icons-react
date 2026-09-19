import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v-o7l4fmy.css';
import '../../css/c/cgdfzcb3d.css';
import '../../css/k/klq73dudp.css';
import '../../css/o/od5u5nb8e.css';
import '../../css/a/avu526spj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v-o7l4fmy"/><path class="cgdfzcb3d"/><path class="klq73dudp"/><path class="od5u5nb8e"/><path class="avu526spj"/></g>`,
		"fallback": "hugeicons:bubble-tea-02",
	});
}

export default Component;
