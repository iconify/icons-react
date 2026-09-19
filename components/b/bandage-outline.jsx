import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei0vgbcyu.css';
import '../../css/u/upm2ipmtj.css';
import '../../css/m/myfh07wzv.css';
import '../../css/o/of2dvxoml.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ei0vgbcyu"/><path clip-rule="evenodd" class="upm2ipmtj"/><path class="myfh07wzv"/><path clip-rule="evenodd" class="of2dvxoml"/></g>`,
		"fallback": "glyphs:bandage-outline",
	});
}

export default Component;
