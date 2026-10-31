import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bep7y0bpg.css';
import '../../css/y/yki7hxixz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bep7y0bpg"/><path class="yki7hxixz"/></g>`,
		"fallback": "struq:attach",
	});
}

export default Component;
