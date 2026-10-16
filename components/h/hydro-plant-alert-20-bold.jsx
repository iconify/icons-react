import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p16fzd8jz.css';
import '../../css/r/rpdwkt9nl.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p16fzd8jz"/><path class="rpdwkt9nl"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:hydro-plant-alert-20-bold",
	});
}

export default Component;
