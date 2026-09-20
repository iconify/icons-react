import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djfh05m5o.css';
import '../../css/o/o6ao99dhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djfh05m5o"/><path class="o6ao99dhs"/>`,
		"fallback": "pixel:ethereum",
	});
}

export default Component;
