import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9aelcbhd.css';
import '../../css/m/mxjolcg6d.css';
import '../../css/s/sm2bgibef.css';
import '../../css/e/eutl42kwo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9aelcbhd"/><path class="mxjolcg6d"/><circle class="sm2bgibef"/><path class="eutl42kwo"/>`,
		"fallback": "fxemoji:door",
	});
}

export default Component;
