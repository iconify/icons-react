import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph619sbso.css';

const viewBox = {"width":444,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph619sbso"/>`,
		"fallback": "file-icons:chartjs",
	});
}

export default Component;
