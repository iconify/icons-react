import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md1ywzv1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md1ywzv1v"/>`,
		"fallback": "thesvg-color:bem",
	});
}

export default Component;
