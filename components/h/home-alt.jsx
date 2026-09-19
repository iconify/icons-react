import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia67kf-tw.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia67kf-tw"/>`,
		"fallback": "el:home-alt",
	});
}

export default Component;
