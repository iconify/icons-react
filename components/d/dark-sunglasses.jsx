import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li4ol9huc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li4ol9huc"/>`,
		"fallback": "dinkie-icons:dark-sunglasses",
	});
}

export default Component;
