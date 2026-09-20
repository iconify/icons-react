import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xuug47bgf.css';
import '../../css/o/oeey5ac7z.css';
import '../../css/u/u9jdfkxiz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xuug47bgf"/><path class="oeey5ac7z"/><path class="u9jdfkxiz"/></g>`,
		"fallback": "marketeq:date-alt-add",
	});
}

export default Component;
