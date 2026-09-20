import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/x/xjghu547v.css';
import '../../css/b/btizuutzp.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfvUskeMK"><g class="o58hkebvg"><path class="xjghu547v"/><circle class="btizuutzp"/></g></mask></defs><path mask="url(#SVGfvUskeMK)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:compas-mini-duotone-line",
	});
}

export default Component;
