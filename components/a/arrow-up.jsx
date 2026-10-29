import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtqntyqlm.css';
import '../../css/j/jcqvt8bwl.css';
import '../../css/m/mmwz_gbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtqntyqlm wm-shadow"/><path class="jcqvt8bwl wm-k"/><path class="mmwz_gbga wm-k"/>`,
		"fallback": "withicons-pastel:arrow-up",
	});
}

export default Component;
