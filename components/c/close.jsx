import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oul7wv0ce.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oul7wv0ce"/>`,
		"fallback": "jam:close",
	});
}

export default Component;
