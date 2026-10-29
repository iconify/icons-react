import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huyx0gevn.css';
import '../../css/l/lmzjhacao.css';
import '../../css/w/wqefnac-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huyx0gevn"/><path class="lmzjhacao"/><path class="wqefnac-r"/>`,
		"fallback": "withicons-bauhaus:arrow-up-down",
	});
}

export default Component;
