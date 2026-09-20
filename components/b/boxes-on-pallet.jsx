import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipj9a1b-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipj9a1b-p"/>`,
		"fallback": "pinhead:boxes-on-pallet",
	});
}

export default Component;
