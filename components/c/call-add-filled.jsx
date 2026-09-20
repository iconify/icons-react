import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7q-yqbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7q-yqbjh"/>`,
		"fallback": "reicon:call-add-filled",
	});
}

export default Component;
