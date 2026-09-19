import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9zkttbmb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9zkttbmb"/>`,
		"fallback": "dinkie-icons:face-with-medical-mask",
	});
}

export default Component;
