import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtn8hf62f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtn8hf62f"/>`,
		"fallback": "stash:chart-trend-down-light",
	});
}

export default Component;
