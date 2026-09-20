import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkx-7iotx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkx-7iotx"/>`,
		"fallback": "thesvg-color:beatstars",
	});
}

export default Component;
