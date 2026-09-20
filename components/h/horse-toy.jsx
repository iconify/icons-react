import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie1lktb8t.css';
import '../../css/f/fwf3hft6m.css';
import '../../css/d/dph3etpje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ie1lktb8t"/><path class="fwf3hft6m"/><path class="dph3etpje"/></g>`,
		"fallback": "tabler:horse-toy",
	});
}

export default Component;
