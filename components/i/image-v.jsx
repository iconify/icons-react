import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff-gp2b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff-gp2b9a"/>`,
		"fallback": "uit:image-v",
	});
}

export default Component;
