import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyfjcqbwm.css';
import '../../css/s/slcgv9bsj.css';
import '../../css/v/vaxyf-bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyfjcqbwm"/><path class="slcgv9bsj"/><path class="vaxyf-bcq"/></g>`,
		"fallback": "lucide-extended:chart-area-duotone",
	});
}

export default Component;
