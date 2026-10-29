import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ypagybckf.css';
import '../../css/z/zlsehabcp.css';
import '../../css/u/ujn-f1vfa.css';
import '../../css/y/yf9dsibnw.css';
import '../../css/f/ftve-cbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ypagybckf"/><path class="wm-a zlsehabcp"/><path class="ujn-f1vfa"/><path class="wm-a yf9dsibnw"/><path class="ftve-cbmp wm-a"/></g>`,
		"fallback": "withicons:candy-bucket-duo",
	});
}

export default Component;
