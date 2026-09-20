import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul3dyo2bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul3dyo2bg"/>`,
		"fallback": "streamline-sharp:cut",
	});
}

export default Component;
