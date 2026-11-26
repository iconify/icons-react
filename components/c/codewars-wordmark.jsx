import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr71nbcku.css';
import '../../css/p/p7p46pb5e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr71nbcku"/><path class="p7p46pb5e"/>`,
		"fallback": "devicon:codewars-wordmark",
	});
}

export default Component;
