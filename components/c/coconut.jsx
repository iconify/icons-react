import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v369ij67b.css';
import '../../css/a/ax63g49zl.css';
import '../../css/t/ts2995b3r.css';
import '../../css/n/n5cpkukua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="v369ij67b"/><path class="ax63g49zl"/><ellipse class="ts2995b3r"/><path class="n5cpkukua"/></g>`,
		"fallback": "lucide-lab:coconut",
	});
}

export default Component;
