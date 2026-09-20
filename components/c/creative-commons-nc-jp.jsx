import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt3rp2b8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt3rp2b8g"/>`,
		"fallback": "la:creative-commons-nc-jp",
	});
}

export default Component;
