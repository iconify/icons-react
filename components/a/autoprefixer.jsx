import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsw1opb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsw1opb5f"/>`,
		"fallback": "simple-icons:autoprefixer",
	});
}

export default Component;
