import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbykp4bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbykp4bfw"/>`,
		"fallback": "reicon:arrow-right5-filled",
	});
}

export default Component;
