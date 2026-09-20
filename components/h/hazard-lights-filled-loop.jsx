import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5jbxh.css';
import '../../css/i/iw1iew.css';
import '../../css/r/r1zcwc.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-7xq8qc.css';
import '../../css/d/d-7h3jep.css';
import '../../css/f/fade-qhlvwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5jbxh iw1iew"/><path class="iw1iew r1zcwc"/>`,
		"fallback": "line-md:hazard-lights-filled-loop",
	});
}

export default Component;
