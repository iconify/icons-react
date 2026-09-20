import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u31kqbk_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u31kqbk_a"/>`,
		"fallback": "streamline-logos:badoo-logo-block",
	});
}

export default Component;
