import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iac4ogb3m.css';
import '../../css/x/xnv84xb3j.css';
import '../../css/r/r9qrt2bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iac4ogb3m"/><path class="xnv84xb3j"/><path class="r9qrt2bvu"/></g>`,
		"fallback": "lucide-lab:glasses-sun",
	});
}

export default Component;
