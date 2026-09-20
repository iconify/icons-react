import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dzzajs9ee.css';
import '../../css/t/tv3dr9bzz.css';
import '../../css/n/ndrwukb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dzzajs9ee"/><path class="tv3dr9bzz"/><path class="ndrwukb5e"/></g>`,
		"fallback": "keyline-icons:globe-off-two-tone",
	});
}

export default Component;
