import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yc8e1ngoo.css';
import '../../css/c/ckk2o-77c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yc8e1ngoo"/><path class="ckk2o-77c"/></g>`,
		"fallback": "marketeq:canned-food",
	});
}

export default Component;
