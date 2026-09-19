import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl5ob1sld.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl5ob1sld"/>`,
		"fallback": "cryptocurrency:edo",
	});
}

export default Component;
