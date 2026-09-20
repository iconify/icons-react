import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2xeywb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2xeywb2c"/>`,
		"fallback": "si:hammer-alt-fill",
	});
}

export default Component;
