import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyqotpbcg.css';
import '../../css/l/l4ln0kb4u.css';
import '../../css/e/e6mlo8hhp.css';
import '../../css/x/x-fkqvbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lyqotpbcg"><rect class="l4ln0kb4u"/><rect class="e6mlo8hhp"/><path class="x-fkqvbof"/></g>`,
		"fallback": "lets-icons:headphones-fill-duotone",
	});
}

export default Component;
