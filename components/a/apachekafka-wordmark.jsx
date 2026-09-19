import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux23lm17f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux23lm17f"/>`,
		"fallback": "devicon:apachekafka-wordmark",
	});
}

export default Component;
