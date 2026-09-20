import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgmjinb1u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgmjinb1u"/>`,
		"fallback": "radix-icons:divider-vertical",
	});
}

export default Component;
