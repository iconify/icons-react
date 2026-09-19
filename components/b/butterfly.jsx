import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciz_0dbnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciz_0dbnf"/>`,
		"fallback": "game-icons:butterfly",
	});
}

export default Component;
