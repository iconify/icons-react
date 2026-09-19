import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzt3wp_aw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzt3wp_aw"/>`,
		"fallback": "devicon:ember-wordmark",
	});
}

export default Component;
