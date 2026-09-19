import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynnrn-bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynnrn-bib"/>`,
		"fallback": "iconoir:de-compress",
	});
}

export default Component;
