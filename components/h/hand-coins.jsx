import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xe28qbbib.css';
import '../../css/f/f4f9qlbwy.css';
import '../../css/a/an94kvrfr.css';
import '../../css/o/og_9js9al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xe28qbbib"/><path class="f4f9qlbwy"/><circle class="an94kvrfr"/><circle class="og_9js9al"/></g>`,
		"fallback": "lucide:hand-coins",
	});
}

export default Component;
