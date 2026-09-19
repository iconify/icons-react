import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcmkkhb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcmkkhb5g"/>`,
		"fallback": "gg:insert-after",
	});
}

export default Component;
