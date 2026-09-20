import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jad-edzcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jad-edzcj"/>`,
		"fallback": "thesvg-color:antennapod",
	});
}

export default Component;
