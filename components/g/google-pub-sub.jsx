import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfd3vfbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfd3vfbld"/>`,
		"fallback": "thesvg:google-pub-sub",
	});
}

export default Component;
