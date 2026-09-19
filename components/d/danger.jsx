import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k_we9dbkd.css';
import '../../css/q/qvv9bdbon.css';
import '../../css/n/n7lafqbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k_we9dbkd"/><path class="qvv9bdbon"/><path class="n7lafqbhi"/></g>`,
		"fallback": "hugeicons:danger",
	});
}

export default Component;
