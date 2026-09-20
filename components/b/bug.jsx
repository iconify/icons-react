import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/meuc0nbnl.css';
import '../../css/p/psnafdcmv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="meuc0nbnl"/><path class="psnafdcmv"/></g>`,
		"fallback": "marketeq:bug",
	});
}

export default Component;
