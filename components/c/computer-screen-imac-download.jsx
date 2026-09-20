import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmvps3rqp.css';
import '../../css/u/u3skedcea.css';
import '../../css/f/fjvbaumvm.css';
import '../../css/i/iepp874wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmvps3rqp"/><path class="u3skedcea"/><path class="fjvbaumvm"/><path class="iepp874wd"/></g>`,
		"fallback": "streamline-cyber-color:computer-screen-imac-download",
	});
}

export default Component;
