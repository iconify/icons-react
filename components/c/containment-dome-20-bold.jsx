import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxuo0cziq.css';
import '../../css/y/yfoxxnbix.css';
import '../../css/q/qu5dliood.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxuo0cziq"/><path class="yfoxxnbix"/><path class="qu5dliood"/>`,
		"fallback": "energy-icons:containment-dome-20-bold",
	});
}

export default Component;
