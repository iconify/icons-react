import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oge_lhbou.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/i/ievl5u7hw.css';
import '../../css/j/jl7obhbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oge_lhbou"/><path class="boz1ay-3b"/><circle class="ievl5u7hw"/><path class="jl7obhbcu"/></g>`,
		"fallback": "lucide:file-image",
	});
}

export default Component;
