import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ful54ccld.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ful54ccld"/>`,
		"fallback": "cib:adobe-lightroom-classic",
	});
}

export default Component;
