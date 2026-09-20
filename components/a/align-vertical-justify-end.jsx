import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n21evp_pt.css';
import '../../css/e/euxaoobyn.css';
import '../../css/e/eisa2cb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="n21evp_pt"/><rect class="euxaoobyn"/><path class="eisa2cb9u"/></g>`,
		"fallback": "lucide:align-vertical-justify-end",
	});
}

export default Component;
