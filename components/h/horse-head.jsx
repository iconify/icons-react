import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1a1x6tjc.css';
import '../../css/v/v64srub5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g1a1x6tjc"/><path class="v64srub5u"/></g>`,
		"fallback": "lucide-lab:horse-head",
	});
}

export default Component;
