import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztw00-h6s.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztw00-h6s"/>`,
		"fallback": "clarity:first-aid-kit-solid",
	});
}

export default Component;
