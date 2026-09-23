import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xy54sia-t.css';
import '../../css/l/lxr-c948j.css';
import '../../css/s/s1gq2diuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xy54sia-t"/><path class="lxr-c948j"/><path class="s1gq2diuh"/></g>`,
		"fallback": "keyline-icons:clock-sparkles-two-tone",
	});
}

export default Component;
