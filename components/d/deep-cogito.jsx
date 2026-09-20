import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m535sz11f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m535sz11f"/>`,
		"fallback": "thesvg:deep-cogito",
	});
}

export default Component;
