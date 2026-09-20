import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr8gfibak.css';
import '../../css/w/w0rmz2ffs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kr8gfibak"/><path class="w0rmz2ffs"/></g>`,
		"fallback": "tabler:coffin",
	});
}

export default Component;
