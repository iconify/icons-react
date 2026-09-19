import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ywknb6x.css';
import '../../css/g/gf6bg710v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ywknb6x"/><path class="gf6bg710v"/>`,
		"fallback": "basil:heartbeat-solid",
	});
}

export default Component;
