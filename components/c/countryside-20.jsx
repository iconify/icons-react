import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsbef1xbv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsbef1xbv"/>`,
		"fallback": "energy-icons:countryside-20",
	});
}

export default Component;
