import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6n88ti7w.css';
import '../../css/m/m7pbobbfo.css';
import '../../css/g/gvy_a0vfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6n88ti7w"/><path class="m7pbobbfo"/><path class="gvy_a0vfr"/></g>`,
		"fallback": "tabler:coffee-pin",
	});
}

export default Component;
