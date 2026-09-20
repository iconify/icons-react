import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v_5i-gbbi.css';
import '../../css/b/bz6bbovpa.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="v_5i-gbbi"/><path class="bz6bbovpa"/></g>`,
		"fallback": "marketeq:diagram-bar-2",
	});
}

export default Component;
