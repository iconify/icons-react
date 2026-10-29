import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oss8fvbse.css';
import '../../css/r/ry3d24byu.css';
import '../../css/m/msf1qbjnq.css';
import '../../css/f/fzlwwzbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oss8fvbse"/><path class="ry3d24byu"/><path class="msf1qbjnq"/><path class="fzlwwzbri"/></g>`,
		"fallback": "withicons-bauhaus:avatar-teen",
	});
}

export default Component;
