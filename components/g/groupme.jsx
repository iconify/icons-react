import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p36imds9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p36imds9p"/>`,
		"fallback": "thesvg-color:groupme",
	});
}

export default Component;
