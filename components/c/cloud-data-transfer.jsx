import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dye88acsw.css';
import '../../css/o/o4xpbm_cf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dye88acsw"/><path class="o4xpbm_cf"/></g>`,
		"fallback": "streamline-flex:cloud-data-transfer",
	});
}

export default Component;
