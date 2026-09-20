import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l11z416ub.css';
import '../../css/t/twzfc7dpg.css';
import '../../css/k/k287uf_wt.css';
import '../../css/i/iwjrb3bnb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l11z416ub"/><path class="twzfc7dpg"/><path class="k287uf_wt"/><path class="iwjrb3bnb"/>`,
		"fallback": "openmoji:eight-pointed-star",
	});
}

export default Component;
