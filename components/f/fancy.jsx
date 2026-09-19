import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlbwn-y9d.css';

const viewBox = {"width":341,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlbwn-y9d"/>`,
		"fallback": "file-icons:fancy",
	});
}

export default Component;
