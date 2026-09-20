import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjghdyp0j.css';
import '../../css/j/jsu9-_e7s.css';
import '../../css/c/ctzk1l0kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mjghdyp0j"/><path class="jsu9-_e7s"/><path class="ctzk1l0kn"/></g>`,
		"fallback": "tabler:file-report",
	});
}

export default Component;
