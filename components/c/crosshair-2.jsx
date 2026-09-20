import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trlk_bt4x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trlk_bt4x"/>`,
		"fallback": "radix-icons:crosshair-2",
	});
}

export default Component;
