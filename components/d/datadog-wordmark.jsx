import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sos2nmbxi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sos2nmbxi"/>`,
		"fallback": "devicon:datadog-wordmark",
	});
}

export default Component;
