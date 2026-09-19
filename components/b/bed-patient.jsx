import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0n8e72ao.css';
import '../../css/y/yk0g4yont.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0n8e72ao"/><path class="yk0g4yont"/>`,
		"fallback": "fontisto:bed-patient",
	});
}

export default Component;
