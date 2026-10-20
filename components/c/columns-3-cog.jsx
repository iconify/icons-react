import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1ncc5zhn.css';
import '../../css/q/q_3tz-zpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g1ncc5zhn"/><path class="q_3tz-zpe"/></g>`,
		"fallback": "vadivam:columns-3-cog",
	});
}

export default Component;
