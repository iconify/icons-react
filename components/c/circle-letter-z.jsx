import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v43x_zb-l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v43x_zb-l"/>`,
		"fallback": "gravity-ui:circle-letter-z",
	});
}

export default Component;
