import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mszzedjss.css';
import '../../css/s/s5a196bgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mszzedjss"/><path class="s5a196bgw"/>`,
		"fallback": "vaadin:dashboard",
	});
}

export default Component;
