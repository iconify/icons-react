import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g5sjxeiis.css';
import '../../css/g/glo57pbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g5sjxeiis"/><path class="glo57pbgo"/></g>`,
		"fallback": "streamline-sharp-color:delete-bookmark",
	});
}

export default Component;
