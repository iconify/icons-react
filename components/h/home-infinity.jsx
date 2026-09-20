import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dslf_3bkh.css';
import '../../css/a/atwi-wbrg.css';
import '../../css/a/a3j2yk42b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dslf_3bkh"/><path class="atwi-wbrg"/><path class="a3j2yk42b"/></g>`,
		"fallback": "tabler:home-infinity",
	});
}

export default Component;
