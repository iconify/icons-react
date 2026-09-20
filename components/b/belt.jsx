import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fo6i0accw.css';
import '../../css/i/ivzhn2iii.css';
import '../../css/h/hzqonabkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fo6i0accw"/><rect class="ivzhn2iii"/><path class="hzqonabkw"/></g>`,
		"fallback": "lucide-lab:belt",
	});
}

export default Component;
