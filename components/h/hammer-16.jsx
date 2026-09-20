import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is0lndb4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is0lndb4h"/>`,
		"fallback": "qlementine-icons:hammer-16",
	});
}

export default Component;
