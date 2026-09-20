import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/v/vm5aagbwz.css';
import '../../css/g/g3581pi_w.css';
import '../../css/n/nybh8pb1j.css';
import '../../css/v/v9yx2hhox.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvTVwgesb"><g class="o58hkebvg"><path class="vm5aagbwz"/><path class="g3581pi_w"/><path class="nybh8pb1j"/><path class="v9yx2hhox"/></g></mask></defs><path mask="url(#SVGvTVwgesb)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:basket-alt-2-duotone-line",
	});
}

export default Component;
