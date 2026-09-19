import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grlb9zb6b.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grlb9zb6b"/>`,
		"fallback": "ps:google-talk",
	});
}

export default Component;
