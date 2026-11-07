import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffc5v_5gb.css';
import '../../css/j/jik0uqbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffc5v_5gb"/><path class="jik0uqbax"/>`,
		"fallback": "solar:cloud-check-bold",
	});
}

export default Component;
