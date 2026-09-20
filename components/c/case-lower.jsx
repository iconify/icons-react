import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/byuwc6cgy.css';
import '../../css/b/bc9n_eqle.css';
import '../../css/o/oh_dgz1af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="byuwc6cgy"/><circle class="bc9n_eqle"/><circle class="oh_dgz1af"/></g>`,
		"fallback": "lucide:case-lower",
	});
}

export default Component;
