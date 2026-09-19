import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaa5qtb6b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaa5qtb6b"/>`,
		"fallback": "whh:beakeralt",
	});
}

export default Component;
