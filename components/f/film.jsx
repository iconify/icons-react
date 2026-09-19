import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np3_u8p3f.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np3_u8p3f"/>`,
		"fallback": "el:film",
	});
}

export default Component;
