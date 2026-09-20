import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5hmupei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx5hmupei"/>`,
		"fallback": "thesvg-color:crew-united",
	});
}

export default Component;
