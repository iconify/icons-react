import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp7lv3bmi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp7lv3bmi"/>`,
		"fallback": "glyphs:five",
	});
}

export default Component;
