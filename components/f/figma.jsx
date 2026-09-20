import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_4kvebfb.css';
import '../../css/s/sihmf6b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o_4kvebfb"/><circle class="sihmf6b4g"/></g>`,
		"fallback": "meteor-icons:figma",
	});
}

export default Component;
