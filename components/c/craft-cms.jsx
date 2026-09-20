import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itw962baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itw962baa"/>`,
		"fallback": "thesvg-color:craft-cms",
	});
}

export default Component;
