import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gtmllccxb.css';
import '../../css/j/jkfnjfi3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gtmllccxb"/><path class="jkfnjfi3s"/></g>`,
		"fallback": "lucide-lab:house-off",
	});
}

export default Component;
