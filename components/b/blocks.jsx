import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwizxcchw.css';
import '../../css/w/wt8wrds2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mwizxcchw"/><rect class="wt8wrds2g"/></g>`,
		"fallback": "lucide:blocks",
	});
}

export default Component;
