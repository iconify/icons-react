import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcssk7bbo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcssk7bbo"/>`,
		"fallback": "fa7-solid:house-medical-flag",
	});
}

export default Component;
