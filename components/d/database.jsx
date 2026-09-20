import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5qukvbeb.css';
import '../../css/m/myq0osbcx.css';
import '../../css/a/alecpcekt.css';
import '../../css/c/cv29znpsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5qukvbeb"/><path class="myq0osbcx"/><path class="alecpcekt"/><path class="cv29znpsp"/></g>`,
		"fallback": "streamline-cyber-color:database",
	});
}

export default Component;
