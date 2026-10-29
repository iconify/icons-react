import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bu3_l_blx.css';
import '../../css/b/b058v_bim.css';
import '../../css/p/psuc-s3be.css';
import '../../css/f/fjwd2bbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bu3_l_blx"/><path class="b058v_bim wm-a"/><path class="psuc-s3be"/><path class="fjwd2bbvb wm-a"/></g>`,
		"fallback": "withicons:crayon-duo",
	});
}

export default Component;
