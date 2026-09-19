import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mff0z4bpo.css';

const viewBox = {"width":990.933,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mff0z4bpo"/>`,
		"fallback": "brandico:blogger",
	});
}

export default Component;
