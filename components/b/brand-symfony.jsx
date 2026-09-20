import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yjhhuol4l.css';
import '../../css/p/p5e1pwbqo.css';
import '../../css/c/ct1w4pbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yjhhuol4l"/><path class="p5e1pwbqo"/><path class="ct1w4pbtl"/></g>`,
		"fallback": "tabler:brand-symfony",
	});
}

export default Component;
