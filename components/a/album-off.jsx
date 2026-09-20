import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m25joj2kf.css';
import '../../css/l/lrgri7bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m25joj2kf"/><path class="lrgri7bwl"/></g>`,
		"fallback": "tabler:album-off",
	});
}

export default Component;
