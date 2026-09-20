import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hogsm-1xw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hogsm-1xw"/>`,
		"fallback": "octicon:heading-16",
	});
}

export default Component;
