import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag3k93sbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag3k93sbp"/>`,
		"fallback": "streamline-ultimate:common-file-module-1",
	});
}

export default Component;
