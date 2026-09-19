import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm995dbiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm995dbiw"/>`,
		"fallback": "fa-regular:flag",
	});
}

export default Component;
