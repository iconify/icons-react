import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o13g0ubbw.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o13g0ubbw"/>`,
		"fallback": "fa-regular:frown",
	});
}

export default Component;
