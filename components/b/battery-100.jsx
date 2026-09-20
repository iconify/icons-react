import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v9t6fpcya.css';
import '../../css/g/gpl3pibhw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="v9t6fpcya"/><path class="gpl3pibhw"/></g>`,
		"fallback": "marketeq:battery-100",
	});
}

export default Component;
