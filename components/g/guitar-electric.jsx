import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt-15vdxr.css';
import '../../css/n/ny8d3pgem.css';
import '../../css/a/a2geh5rsb.css';
import '../../css/t/t7hrxrv3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xt-15vdxr"/><path class="ny8d3pgem"/><path class="a2geh5rsb"/><path clip-rule="evenodd" class="t7hrxrv3x"/></g>`,
		"fallback": "andrsrxn:guitar-electric",
	});
}

export default Component;
