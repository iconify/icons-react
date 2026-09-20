import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfmt5nbbe.css';
import '../../css/y/ymveapbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vfmt5nbbe"/><path class="ymveapbva"/></g>`,
		"fallback": "tabler:gpu-2",
	});
}

export default Component;
