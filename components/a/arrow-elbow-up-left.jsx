import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijzxdu85o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ijzxdu85o"/>`,
		"fallback": "griddy-icons:arrow-elbow-up-left",
	});
}

export default Component;
