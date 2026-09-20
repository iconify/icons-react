import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yycddsb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yycddsb3a"/>`,
		"fallback": "keyline-icons:git-pull-request-create-arrow-sharp",
	});
}

export default Component;
