import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn49wrlsc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn49wrlsc"/>`,
		"fallback": "maki:furniture",
	});
}

export default Component;
