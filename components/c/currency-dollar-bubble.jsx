import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqv-e-2vb.css';
import '../../css/c/c_020ye1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aqv-e-2vb"/><path class="c_020ye1r"/></g>`,
		"fallback": "streamline-freehand:currency-dollar-bubble",
	});
}

export default Component;
