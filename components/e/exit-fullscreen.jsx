import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itkxm1eaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itkxm1eaj"/>`,
		"fallback": "bx:exit-fullscreen",
	});
}

export default Component;
