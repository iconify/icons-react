import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig_9i2bwx.css';
import '../../css/g/gyalifbab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig_9i2bwx"/><path class="gyalifbab"/>`,
		"fallback": "qlementine-icons:eq-high-cut-16",
	});
}

export default Component;
