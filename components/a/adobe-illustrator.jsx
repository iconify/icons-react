import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x03bb4t8g.css';
import '../../css/k/k-_e98l6u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="x03bb4t8g"/><path class="k-_e98l6u"/>`,
		"fallback": "material-icon-theme:adobe-illustrator",
	});
}

export default Component;
