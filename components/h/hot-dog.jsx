import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqyv2cbka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqyv2cbka"/>`,
		"fallback": "game-icons:hot-dog",
	});
}

export default Component;
