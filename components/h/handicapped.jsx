import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-1dzrb4k.css';
import '../../css/e/euh_zjblv.css';
import '../../css/b/bgnz63b4e.css';
import '../../css/e/eo3ze_l3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j-1dzrb4k"/><path class="euh_zjblv"/><path class="bgnz63b4e"/><path class="eo3ze_l3n"/></g>`,
		"fallback": "mage:handicapped",
	});
}

export default Component;
