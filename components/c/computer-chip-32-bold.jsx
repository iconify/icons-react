import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oahi-jwnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oahi-jwnw"/>`,
		"fallback": "streamline-ultimate:computer-chip-32-bold",
	});
}

export default Component;
