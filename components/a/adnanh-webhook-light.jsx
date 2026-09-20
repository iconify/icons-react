import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yql2vebfa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yql2vebfa"/>`,
		"fallback": "selfhst:adnanh-webhook-light",
	});
}

export default Component;
