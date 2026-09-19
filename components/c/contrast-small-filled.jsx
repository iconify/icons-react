import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh_-wvb-t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh_-wvb-t"/>`,
		"fallback": "dinkie-icons:contrast-small-filled",
	});
}

export default Component;
