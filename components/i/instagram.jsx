import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izpldp4wj.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izpldp4wj"/>`,
		"fallback": "fa:instagram",
	});
}

export default Component;
