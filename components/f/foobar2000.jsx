import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm9hq0b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm9hq0b2l"/>`,
		"fallback": "thesvg-color:foobar2000",
	});
}

export default Component;
