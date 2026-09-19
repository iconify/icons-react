import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwe13cc8d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwe13cc8d"/>`,
		"fallback": "dinkie-icons:anchor-small",
	});
}

export default Component;
