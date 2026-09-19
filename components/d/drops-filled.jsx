import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjjreccxy.css';
import '../../css/t/t_s_xqb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vjjreccxy"/><path class="t_s_xqb-n"/>`,
		"fallback": "bitcoin-icons:drops-filled",
	});
}

export default Component;
