import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbyot8xbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbyot8xbp"/>`,
		"fallback": "thesvg:git-extensions",
	});
}

export default Component;
