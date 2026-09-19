import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvf-h2b0s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvf-h2b0s"/>`,
		"fallback": "dinkie-icons:boy-filled",
	});
}

export default Component;
