import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wuqr2acil.css';
import '../../css/h/hgef23b7m.css';
import '../../css/k/k30xijbti.css';
import '../../css/p/pw_ntac8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wuqr2acil"/><path class="hgef23b7m"/><path class="k30xijbti"/><path class="pw_ntac8e"/></g>`,
		"fallback": "solar:chevrons-right-left-line-duotone",
	});
}

export default Component;
