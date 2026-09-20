import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcqwyrl5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcqwyrl5l"/>`,
		"fallback": "thesvg-color:apache-pulsar",
	});
}

export default Component;
