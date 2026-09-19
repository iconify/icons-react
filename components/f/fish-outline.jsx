import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di3p_6bnk.css';
import '../../css/t/t8wo_rv6h.css';
import '../../css/v/vkmkxtqch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di3p_6bnk"/><circle class="t8wo_rv6h"/><path class="vkmkxtqch"/>`,
		"fallback": "ion:fish-outline",
	});
}

export default Component;
