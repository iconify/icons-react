import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cng445bcg.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v046j2erx.css';
import '../../css/h/hzza3-bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cng445bcg"/><g class="xtpeb-edw"><path class="v046j2erx"/><path class="hzza3-bxa"/></g>`,
		"fallback": "solar:airbuds-case-bold-duotone",
	});
}

export default Component;
