import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz-ewac9b.css';
import '../../css/c/c-39a_bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz-ewac9b"/><path class="c-39a_bhy"/>`,
		"fallback": "gcp:automl-vision",
	});
}

export default Component;
