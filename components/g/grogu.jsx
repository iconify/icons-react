import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l925n1bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l925n1bum"/>`,
		"fallback": "cbi:grogu",
	});
}

export default Component;
