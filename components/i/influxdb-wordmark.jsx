import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeiup5blg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeiup5blg"/>`,
		"fallback": "devicon:influxdb-wordmark",
	});
}

export default Component;
