import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdc-kyntd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdc-kyntd"/>`,
		"fallback": "simple-icons:feedly",
	});
}

export default Component;
