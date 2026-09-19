import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_o4u3b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_o4u3b4d"/>`,
		"fallback": "cbi:ikea-ps-2014-open",
	});
}

export default Component;
