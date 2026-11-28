import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhx9fhbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhx9fhbmx"/>`,
		"fallback": "iconaut:accent-grave-solid",
	});
}

export default Component;
