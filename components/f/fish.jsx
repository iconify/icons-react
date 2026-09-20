import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdbvcv8lk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdbvcv8lk"/>`,
		"fallback": "jam:fish",
	});
}

export default Component;
