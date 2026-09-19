import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cssdib97t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cssdib97t"/>`,
		"fallback": "dinkie-icons:bomb-filled",
	});
}

export default Component;
