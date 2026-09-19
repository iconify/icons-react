import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0n74mbkk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0n74mbkk"/>`,
		"fallback": "devicon:corejs-wordmark",
	});
}

export default Component;
