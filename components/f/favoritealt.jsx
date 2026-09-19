import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojxidfsom.css';

const viewBox = {"width":1026,"height":962};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojxidfsom"/>`,
		"fallback": "whh:favoritealt",
	});
}

export default Component;
