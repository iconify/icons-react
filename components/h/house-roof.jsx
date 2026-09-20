import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ul36bu9lo.css';
import '../../css/e/egjhlrmhl.css';
import '../../css/d/dr19a2blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ul36bu9lo"/><path class="egjhlrmhl"/><path class="dr19a2blj"/></g>`,
		"fallback": "lucide-lab:house-roof",
	});
}

export default Component;
