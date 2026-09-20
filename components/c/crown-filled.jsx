import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkk6y9b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkk6y9b0t"/>`,
		"fallback": "reicon:crown-filled",
	});
}

export default Component;
