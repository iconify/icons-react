import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gjhijcc0u.css';
import '../../css/h/hfi5ulj3g.css';
import '../../css/a/a93tonc-k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gjhijcc0u"/><path class="hfi5ulj3g"/><path class="a93tonc-k"/></g>`,
		"fallback": "marketeq:door-handle",
	});
}

export default Component;
