import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ral2q35-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ral2q35-z"/>`,
		"fallback": "pixelarticons:add-box",
	});
}

export default Component;
