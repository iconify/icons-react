import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/u/uipprnk6p.css';
import '../../css/k/kwnyzqbsp.css';
import '../../css/c/cj9sq2bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fll0uqb6i"/><path class="uipprnk6p"/><path class="kwnyzqbsp"/><path class="cj9sq2bnh"/></g>`,
		"fallback": "streamline-ultimate:email-action-warning",
	});
}

export default Component;
