import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4qc7h.css';
import '../../css/i/iw1iew.css';
import '../../css/d/dncafw.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4qc7h iw1iew"/><path class="dncafw iw1iew"/>`,
		"fallback": "line-md:close-circle-twotone",
	});
}

export default Component;
