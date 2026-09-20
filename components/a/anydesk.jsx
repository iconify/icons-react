import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms2gyg5jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms2gyg5jc"/>`,
		"fallback": "thesvg-color:anydesk",
	});
}

export default Component;
