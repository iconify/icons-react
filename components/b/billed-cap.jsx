import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npypd61ro.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npypd61ro"/>`,
		"fallback": "dinkie-icons:billed-cap",
	});
}

export default Component;
