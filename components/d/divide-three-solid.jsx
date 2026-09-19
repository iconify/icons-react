import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/i/ixpcsp8bg.css';
import '../../css/k/kgacrmxem.css';
import '../../css/e/ejn7m6b_g.css';
import '../../css/k/kw9jeleff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="ixpcsp8bg"/><path class="kgacrmxem"/><path class="ejn7m6b_g"/><path class="kw9jeleff"/></g>`,
		"fallback": "iconoir:divide-three-solid",
	});
}

export default Component;
