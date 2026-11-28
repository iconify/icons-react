import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb40qvjhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb40qvjhk"/>`,
		"fallback": "iconaut:cone-solid",
	});
}

export default Component;
