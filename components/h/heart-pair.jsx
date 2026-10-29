import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ajxwqpb9u.css';
import '../../css/w/wx95qzg_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ajxwqpb9u"/><path class="wm-a wx95qzg_i"/></g>`,
		"fallback": "withicons:heart-pair",
	});
}

export default Component;
