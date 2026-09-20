import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asn7qebaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asn7qebaa"/>`,
		"fallback": "thesvg-color:emirates",
	});
}

export default Component;
