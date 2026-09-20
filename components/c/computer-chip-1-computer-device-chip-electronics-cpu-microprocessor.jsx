import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/clmxuurab.css';
import '../../css/f/fgy7eruvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="clmxuurab"/><path class="fgy7eruvj"/></g>`,
		"fallback": "streamline:computer-chip-1-computer-device-chip-electronics-cpu-microprocessor",
	});
}

export default Component;
