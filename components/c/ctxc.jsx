import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5tm16s_g.css';
import '../../css/r/rj75uw35p.css';
import '../../css/h/h5s278hih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5tm16s_g"/><path class="rj75uw35p"/><path class="h5s278hih"/>`,
		"fallback": "token:ctxc",
	});
}

export default Component;
