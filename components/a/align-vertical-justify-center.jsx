import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h406zcb0o.css';
import '../../css/e/euxaoobyn.css';
import '../../css/x/x26a8iq1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="h406zcb0o"/><rect class="euxaoobyn"/><path class="x26a8iq1c"/></g>`,
		"fallback": "lucide:align-vertical-justify-center",
	});
}

export default Component;
