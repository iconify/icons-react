import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el1eu57nk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el1eu57nk"/>`,
		"fallback": "pinhead:briefcase-with-droplet",
	});
}

export default Component;
