import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie1i99bwi.css';
import '../../css/b/bxuamrbpm.css';
import '../../css/o/o8rmgetue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ie1i99bwi"/><path class="bxuamrbpm"/><circle class="o8rmgetue"/></g>`,
		"fallback": "lucide:file-badge",
	});
}

export default Component;
