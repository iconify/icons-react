import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r18p76buy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r18p76buy"/>`,
		"fallback": "reicon:color-tuning-filled",
	});
}

export default Component;
