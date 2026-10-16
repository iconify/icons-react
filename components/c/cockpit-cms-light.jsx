import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie4p76ois.css';

const viewBox = {"width":310,"height":310};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie4p76ois"/>`,
		"fallback": "thesvg-color:cockpit-cms-light",
	});
}

export default Component;
