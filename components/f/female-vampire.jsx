import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eml8ybc8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eml8ybc8c"/>`,
		"fallback": "game-icons:female-vampire",
	});
}

export default Component;
