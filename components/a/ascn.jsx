import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqjzyv4lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqjzyv4lh"/>`,
		"fallback": "token:ascn",
	});
}

export default Component;
