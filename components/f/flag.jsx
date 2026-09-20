import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giiqp_bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giiqp_bku"/>`,
		"fallback": "keyline-icons:flag",
	});
}

export default Component;
