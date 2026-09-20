import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guzigw6xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guzigw6xd"/>`,
		"fallback": "thesvg:conekta",
	});
}

export default Component;
