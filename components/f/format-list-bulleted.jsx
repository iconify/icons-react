import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twzfg2g1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twzfg2g1z"/>`,
		"fallback": "mdi-light:format-list-bulleted",
	});
}

export default Component;
