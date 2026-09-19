import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ocapbze.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3ocapbze"/>`,
		"fallback": "f7:cloud-sun",
	});
}

export default Component;
