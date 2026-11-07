import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/a/a-44o5enj.css';
import '../../css/w/wn9x1iaaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path clip-rule="evenodd" class="a-44o5enj"/><path clip-rule="evenodd" class="wn9x1iaaz"/>`,
		"fallback": "solar:augmented-reality-bold-duotone",
	});
}

export default Component;
