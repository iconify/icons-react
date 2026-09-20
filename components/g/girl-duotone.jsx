import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de3fnpb6z.css';
import '../../css/v/vz3elsb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="de3fnpb6z"/><path class="vz3elsb2r"/></g>`,
		"fallback": "keyline-icons:girl-duotone",
	});
}

export default Component;
