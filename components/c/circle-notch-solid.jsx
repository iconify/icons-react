import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn4keacsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn4keacsx"/>`,
		"fallback": "pixel:circle-notch-solid",
	});
}

export default Component;
