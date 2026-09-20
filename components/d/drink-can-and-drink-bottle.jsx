import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2je18u3g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2je18u3g"/>`,
		"fallback": "pinhead:drink-can-and-drink-bottle",
	});
}

export default Component;
