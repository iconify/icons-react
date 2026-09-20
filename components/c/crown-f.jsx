import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfamv3h8h.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfamv3h8h"/>`,
		"fallback": "jam:crown-f",
	});
}

export default Component;
