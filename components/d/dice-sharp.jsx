import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-d3uqbve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-d3uqbve"/>`,
		"fallback": "famicons:dice-sharp",
	});
}

export default Component;
