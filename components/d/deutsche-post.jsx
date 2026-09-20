import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va4l82bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va4l82bbw"/>`,
		"fallback": "thesvg:deutsche-post",
	});
}

export default Component;
