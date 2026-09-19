import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffu9thy4x.css';

const viewBox = {"width":432,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffu9thy4x"/>`,
		"fallback": "ps:brightkite",
	});
}

export default Component;
