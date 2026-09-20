import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpxl7f8fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zpxl7f8fi"/>`,
		"fallback": "streamline-logos:adobe-after-effects-logo-block",
	});
}

export default Component;
