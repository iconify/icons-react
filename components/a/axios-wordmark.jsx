import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg15pabpd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg15pabpd"/>`,
		"fallback": "devicon-plain:axios-wordmark",
	});
}

export default Component;
