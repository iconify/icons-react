import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_57cqbub.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_57cqbub"/>`,
		"fallback": "devicon-plain:html5",
	});
}

export default Component;
