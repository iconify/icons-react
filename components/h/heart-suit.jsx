import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uroqbab3z.css';
import '../../css/g/gtjqggbel.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uroqbab3z"/><path class="gtjqggbel"/>`,
		"fallback": "openmoji:heart-suit",
	});
}

export default Component;
