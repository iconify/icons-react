import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v78z00blh.css';
import '../../css/a/aj0gbdb0u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v78z00blh"/><path class="aj0gbdb0u"/>`,
		"fallback": "devicon-plain:arduino-wordmark",
	});
}

export default Component;
