import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgb4m8j_a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgb4m8j_a"/>`,
		"fallback": "radix-icons:group",
	});
}

export default Component;
