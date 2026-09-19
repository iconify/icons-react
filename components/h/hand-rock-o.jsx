import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un8-nx_wi.css';

const viewBox = {"width":1536,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un8-nx_wi"/>`,
		"fallback": "fa:hand-rock-o",
	});
}

export default Component;
