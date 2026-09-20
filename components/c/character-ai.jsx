import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j50656bva.css';

const viewBox = {"width":364,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j50656bva"/>`,
		"fallback": "thesvg-color:character-ai",
	});
}

export default Component;
