import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/axf9y7vsv.css';
import '../../css/c/ci-a-2byv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="axf9y7vsv"/><path class="ci-a-2byv"/></g>`,
		"fallback": "marketeq:clipboard-add-2",
	});
}

export default Component;
