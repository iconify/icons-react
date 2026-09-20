import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nxmy0_k9f.css';
import '../../css/e/eqoezb_0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nxmy0_k9f"/><path class="eqoezb_0y"/></g>`,
		"fallback": "streamline-ultimate:arrange-number-descending",
	});
}

export default Component;
