import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a65dndbws.css';
import '../../css/b/btw_rsbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a65dndbws"/><path class="btw_rsbbl"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-end-fill",
	});
}

export default Component;
