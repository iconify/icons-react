import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_cw8dy4r.css';
import '../../css/v/vrerg91sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b_cw8dy4r"/><path class="vrerg91sl"/></g>`,
		"fallback": "tabler:current-location-off",
	});
}

export default Component;
