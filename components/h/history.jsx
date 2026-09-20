import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfojsy6pj.css';
import '../../css/a/a7iy2kw9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfojsy6pj"/><path class="a7iy2kw9d"/></g>`,
		"fallback": "lucide:history",
	});
}

export default Component;
