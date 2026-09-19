import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naayegban.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="naayegban"/>`,
		"fallback": "gravity-ui:circle-arrow-right",
	});
}

export default Component;
