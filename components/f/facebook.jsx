import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyayll8ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyayll8ub"/>`,
		"fallback": "meteor-icons:facebook",
	});
}

export default Component;
