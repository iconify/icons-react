import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rxcb6bcmv.css';
import '../../css/o/owtz82xsk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="rxcb6bcmv"/><path class="owtz82xsk"/></g>`,
		"fallback": "streamline:computer-chip-2-core-microprocessor-device-electronics-chip-computer",
	});
}

export default Component;
