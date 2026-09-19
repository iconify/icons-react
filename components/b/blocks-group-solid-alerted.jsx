import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz_4tkber.css';
import '../../css/q/q0dvizbgk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted vz_4tkber"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-2--alerted q0dvizbgk"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:blocks-group-solid-alerted",
	});
}

export default Component;
