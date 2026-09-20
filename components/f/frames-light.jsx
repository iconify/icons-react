import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfvac11yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfvac11yx"/>`,
		"fallback": "selfhst:frames-light",
	});
}

export default Component;
