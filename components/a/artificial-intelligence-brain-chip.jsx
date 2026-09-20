import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ufvlzgcdl.css';
import '../../css/k/kmx3l7elf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ufvlzgcdl"/><path class="kmx3l7elf"/></g>`,
		"fallback": "streamline-flex:artificial-intelligence-brain-chip",
	});
}

export default Component;
