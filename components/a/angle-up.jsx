import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh7wvsr7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh7wvsr7y"/>`,
		"fallback": "icons8:angle-up",
	});
}

export default Component;
