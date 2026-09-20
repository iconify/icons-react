import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2asp0b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2asp0b9w"/>`,
		"fallback": "selfhst:composetoolbox-light",
	});
}

export default Component;
