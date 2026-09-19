import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-boofokw.css';

const viewBox = {"width":961,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-boofokw"/>`,
		"fallback": "whh:earbuds",
	});
}

export default Component;
