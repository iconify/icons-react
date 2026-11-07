import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q3zld5bik.css';
import '../../css/m/mbe0glb8u.css';
import '../../css/s/szmqvptdx.css';
import '../../css/u/u62sx-gut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="q3zld5bik"/><path class="mbe0glb8u"/><path class="szmqvptdx"/></g><path class="u62sx-gut"/>`,
		"fallback": "solar:blocks-bold-duotone",
	});
}

export default Component;
