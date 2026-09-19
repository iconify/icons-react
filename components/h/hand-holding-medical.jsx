import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gox7g7b0v.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gox7g7b0v"/>`,
		"fallback": "fa6-solid:hand-holding-medical",
	});
}

export default Component;
