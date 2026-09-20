import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-d90l.css';
import '../../css/i/iw1iew.css';
import '../../css/f/fce2zc.css';
import '../../css/s/so-from-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-d90l iw1iew"/><path class="fce2zc iw1iew"/>`,
		"fallback": "line-md:circle-twotone-to-confirm-circle-twotone-transition",
	});
}

export default Component;
