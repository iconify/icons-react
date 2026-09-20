import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zydi_fb2u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zydi_fb2u"/>`,
		"fallback": "streamline:heading-2-paragraph-styles-heading",
	});
}

export default Component;
