import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bffeugi-o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bffeugi-o"/>`,
		"fallback": "dinkie-icons:app-store-filled",
	});
}

export default Component;
