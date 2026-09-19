import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usr8d0vnk.css';
import '../../css/m/my-g78bbf.css';
import '../../css/i/ibd18pb0y.css';
import '../../css/u/uvm8k6bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usr8d0vnk"/><path class="my-g78bbf"/><circle class="ibd18pb0y"/><circle class="uvm8k6bog"/>`,
		"fallback": "circum:face-frown",
	});
}

export default Component;
