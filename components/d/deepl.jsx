import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a95-7nkor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a95-7nkor"/>`,
		"fallback": "thesvg-color:deepl",
	});
}

export default Component;
