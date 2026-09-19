import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw3iws-iw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw3iws-iw"/>`,
		"fallback": "fa7-solid:child-reaching",
	});
}

export default Component;
