import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c67e4e7nl.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c67e4e7nl"/>`,
		"fallback": "wpf:highbattery",
	});
}

export default Component;
