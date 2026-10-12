import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y85bi0b7a.css';
import '../../css/q/q3818dbqt.css';
import '../../css/f/fbiyt7hbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y85bi0b7a"/><path class="q3818dbqt"/><path class="fbiyt7hbh"/>`,
		"fallback": "energy-icons:drawing-compass-20",
	});
}

export default Component;
