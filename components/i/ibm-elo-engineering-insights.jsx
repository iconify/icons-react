import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo6j7xbls.css';
import '../../css/v/vrpmrdbjw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo6j7xbls"/><path class="vrpmrdbjw"/>`,
		"fallback": "carbon:ibm-elo-engineering-insights",
	});
}

export default Component;
