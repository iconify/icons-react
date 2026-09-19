import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d28nq_1xp.css';
import '../../css/m/mwlmu5b9e.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGmDobbeyg"><path clip-rule="evenodd" class="d28nq_1xp"/><path class="mwlmu5b9e"/></mask></defs><path mask="url(#SVGmDobbeyg)" class="w49j0rbvv"/></g>`,
		"fallback": "bitcoin-icons:chair-filled",
	});
}

export default Component;
