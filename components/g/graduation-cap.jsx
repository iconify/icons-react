import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caw3fktbl.css';
import '../../css/k/k_3k7ab8h.css';
import '../../css/t/tsntq4fba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caw3fktbl"/><path class="k_3k7ab8h"/><path class="tsntq4fba"/>`,
		"fallback": "withicons-bauhaus:graduation-cap",
	});
}

export default Component;
