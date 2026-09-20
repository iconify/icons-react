import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdapn3bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdapn3bjo"/>`,
		"fallback": "tabler:arrow-big-up-line",
	});
}

export default Component;
