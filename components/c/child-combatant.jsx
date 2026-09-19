import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7sl2bb-w.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7sl2bb-w"/>`,
		"fallback": "fa6-solid:child-combatant",
	});
}

export default Component;
