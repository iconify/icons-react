import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb1r76bpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb1r76bpp"/>`,
		"fallback": "material-icon-theme:c3",
	});
}

export default Component;
