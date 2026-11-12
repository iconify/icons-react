import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twbai2bbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twbai2bbu"/>`,
		"fallback": "selfhst:buggregator",
	});
}

export default Component;
