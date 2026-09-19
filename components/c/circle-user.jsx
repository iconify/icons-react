import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh8_sbcku.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh8_sbcku"/>`,
		"fallback": "fa7-regular:circle-user",
	});
}

export default Component;
