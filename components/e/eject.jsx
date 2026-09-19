import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yglz00bkg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yglz00bkg"/>`,
		"fallback": "glyphs:eject",
	});
}

export default Component;
