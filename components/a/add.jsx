import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oelwi8d2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oelwi8d2s"/>`,
		"fallback": "tdesign:add",
	});
}

export default Component;
