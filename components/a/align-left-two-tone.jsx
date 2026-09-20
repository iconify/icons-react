import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz4810o9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz4810o9p"/>`,
		"fallback": "keyline-icons:align-left-two-tone",
	});
}

export default Component;
