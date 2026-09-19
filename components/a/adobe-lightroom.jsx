import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z752n2b6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z752n2b6s"/>`,
		"fallback": "cib:adobe-lightroom",
	});
}

export default Component;
