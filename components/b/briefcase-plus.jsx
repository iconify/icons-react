import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d_36mfbfe.css';
import '../../css/j/j937vebeo.css';
import '../../css/f/fjzl3b15u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d_36mfbfe"/><rect class="j937vebeo"/><path class="fjzl3b15u"/></g>`,
		"fallback": "lucide-lab:briefcase-plus",
	});
}

export default Component;
