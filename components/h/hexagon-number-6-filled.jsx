import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh1m32rea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh1m32rea"/>`,
		"fallback": "tabler:hexagon-number-6-filled",
	});
}

export default Component;
