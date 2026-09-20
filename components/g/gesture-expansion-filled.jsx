import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsmgo6kln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsmgo6kln"/>`,
		"fallback": "tdesign:gesture-expansion-filled",
	});
}

export default Component;
