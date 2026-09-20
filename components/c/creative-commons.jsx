import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0zte_ban.css';
import '../../css/u/u_7efpbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a0zte_ban"/><path class="u_7efpbht"/>`,
		"fallback": "lineicons:creative-commons",
	});
}

export default Component;
