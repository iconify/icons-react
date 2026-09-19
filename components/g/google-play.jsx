import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rovv-r93y.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rovv-r93y"/>`,
		"fallback": "fontisto:google-play",
	});
}

export default Component;
