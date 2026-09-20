import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kvm91kbjt.css';
import '../../css/l/lclt2gbyt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kvm91kbjt"/><path class="lclt2gbyt"/></g>`,
		"fallback": "streamline:cloud-block",
	});
}

export default Component;
