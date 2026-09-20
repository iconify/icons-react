import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bla9p1bgi.css';
import '../../css/v/vo8d3o73t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bla9p1bgi"/><path class="vo8d3o73t"/></g>`,
		"fallback": "tabler:hand-finger-down",
	});
}

export default Component;
