import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdpm5sixb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdpm5sixb"/>`,
		"fallback": "keyline-icons:expand-dashed-down-right-box-sharp",
	});
}

export default Component;
