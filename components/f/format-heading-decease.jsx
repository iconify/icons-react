import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozv103bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozv103bvx"/>`,
		"fallback": "mdi:format-heading-decease",
	});
}

export default Component;
