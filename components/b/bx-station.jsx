import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1xy6nh9u.css';
import '../../css/b/b8gjdvb7r.css';
import '../../css/h/hux66ibbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n1xy6nh9u"/><path class="b8gjdvb7r"/><path class="hux66ibbx"/>`,
		"fallback": "bx:bx-station",
	});
}

export default Component;
