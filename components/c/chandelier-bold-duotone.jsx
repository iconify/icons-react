import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv5nl_bjz.css';
import '../../css/y/yq0r6kchx.css';
import '../../css/h/hp-w9zbfb.css';
import '../../css/o/oyw1l7bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pv5nl_bjz"/><path class="yq0r6kchx"/><path class="hp-w9zbfb"/><path class="oyw1l7bsw"/>`,
		"fallback": "solar:chandelier-bold-duotone",
	});
}

export default Component;
