import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e92jr9qgn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e92jr9qgn"/>`,
		"fallback": "dinkie-icons:cat-face-small",
	});
}

export default Component;
