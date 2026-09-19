import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcyulqw-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcyulqw-d"/>`,
		"fallback": "fluent-emoji-high-contrast:headphone",
	});
}

export default Component;
