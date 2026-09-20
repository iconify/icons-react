import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-1f9yqij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-1f9yqij"/>`,
		"fallback": "thesvg-color:firewalla",
	});
}

export default Component;
