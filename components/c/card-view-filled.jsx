import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fepn_rb5k.css';
import '../../css/n/nq5_ejy6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="fepn_rb5k"/><path class="nq5_ejy6s"/>`,
		"fallback": "boxicons:card-view-filled",
	});
}

export default Component;
