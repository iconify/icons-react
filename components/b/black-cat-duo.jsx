import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lbnt75byn.css';
import '../../css/w/w27peibbj.css';
import '../../css/s/scgb-sjtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lbnt75byn"/><path class="w27peibbj wm-a"/><path class="scgb-sjtz"/></g>`,
		"fallback": "withicons:black-cat-duo",
	});
}

export default Component;
