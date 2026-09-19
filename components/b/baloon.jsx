import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlp5gb8zq.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlp5gb8zq"/>`,
		"fallback": "whh:baloon",
	});
}

export default Component;
