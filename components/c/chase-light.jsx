import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tce8ar49c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tce8ar49c"/>`,
		"fallback": "selfhst:chase-light",
	});
}

export default Component;
