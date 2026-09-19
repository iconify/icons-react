import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca84dfbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca84dfbhs"/>`,
		"fallback": "grommet-icons:instagram",
	});
}

export default Component;
