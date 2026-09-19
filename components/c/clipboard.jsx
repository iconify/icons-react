import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f21qdeb7h.css';
import '../../css/s/s5lpn11ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f21qdeb7h"/><rect class="s5lpn11ei"/></g>`,
		"fallback": "feather:clipboard",
	});
}

export default Component;
