import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzcg2bcvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzcg2bcvv"/>`,
		"fallback": "glyphs-poly:five",
	});
}

export default Component;
