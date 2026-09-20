import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqa8yfaed.css';

const viewBox = {"width":1545,"height":1544};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqa8yfaed"/>`,
		"fallback": "thesvg-color:gevernova-light",
	});
}

export default Component;
