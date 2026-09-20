import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8jgw_rfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8jgw_rfl"/>`,
		"fallback": "thesvg-color:google-play-games",
	});
}

export default Component;
