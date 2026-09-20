import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aqfch74uv.css';
import '../../css/s/sg81q-vci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aqfch74uv"/><path class="sg81q-vci"/></g>`,
		"fallback": "keyline-icons:door-open-two-tone",
	});
}

export default Component;
