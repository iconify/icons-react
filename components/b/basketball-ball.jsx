import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wffk06bbo.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wffk06bbo"/>`,
		"fallback": "fa-solid:basketball-ball",
	});
}

export default Component;
