import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o72e3cdbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o72e3cdbb"/>`,
		"fallback": "streamline-sharp:baggage",
	});
}

export default Component;
