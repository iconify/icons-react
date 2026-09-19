import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2j9mlb-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2j9mlb-a"/>`,
		"fallback": "cryptocurrency:arnx",
	});
}

export default Component;
