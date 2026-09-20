import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb3lupxla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb3lupxla"/>`,
		"fallback": "selfhst:amazon-light",
	});
}

export default Component;
