import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdn7ccb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdn7ccb-f"/>`,
		"fallback": "pixel:analytics-solid",
	});
}

export default Component;
