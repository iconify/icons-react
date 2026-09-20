import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/ch3-uebwe.css';
import '../../css/y/y_12t6qyt.css';
import '../../css/a/aimn5ubnz.css';
import '../../css/a/abhxg8bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ch3-uebwe"/><path class="y_12t6qyt"/><path class="aimn5ubnz"/><path class="abhxg8bdt"/></g>`,
		"fallback": "streamline-cyber:camera-4",
	});
}

export default Component;
