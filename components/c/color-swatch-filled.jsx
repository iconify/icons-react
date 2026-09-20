import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niwqy6-id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niwqy6-id"/>`,
		"fallback": "reicon:color-swatch-filled",
	});
}

export default Component;
