import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec1pm8b-x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec1pm8b-x"/>`,
		"fallback": "fluent-mdl2:contact-info",
	});
}

export default Component;
