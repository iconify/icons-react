import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf09xehhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf09xehhc"/>`,
		"fallback": "thesvg-color:helix",
	});
}

export default Component;
