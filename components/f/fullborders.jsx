import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_igwibwv.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_igwibwv"/>`,
		"fallback": "whh:fullborders",
	});
}

export default Component;
