import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hvoy-zb4a.css';
import '../../css/x/xzi74p0-c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hvoy-zb4a"/><path class="xzi74p0-c"/></g>`,
		"fallback": "marketeq:double-left-sign",
	});
}

export default Component;
