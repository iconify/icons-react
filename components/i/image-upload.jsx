import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si5p7gb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si5p7gb_g"/>`,
		"fallback": "uil:image-upload",
	});
}

export default Component;
