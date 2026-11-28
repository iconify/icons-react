import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu801gbmo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/znd87nbay.css';
import '../../css/v/vygixqgec.css';
import '../../css/t/th6vuccay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu801gbmo secondary"/><g class="dt0cm9dhy primary"><path class="znd87nbay"/><path class="vygixqgec"/><path class="th6vuccay"/></g>`,
		"fallback": "iconaut:file-stack-duo",
	});
}

export default Component;
