import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wuzbxugci.css';
import '../../css/g/gxot2cbmf.css';
import '../../css/w/wtcllob5c.css';
import '../../css/e/e3xzh381y.css';
import '../../css/e/erq0zbctn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wuzbxugci"/><path class="gxot2cbmf"/><path class="wtcllob5c"/><path class="e3xzh381y"/><path class="erq0zbctn"/></g>`,
		"fallback": "catppuccin:figma",
	});
}

export default Component;
