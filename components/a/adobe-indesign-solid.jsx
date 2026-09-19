import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezodczb5s.css';
import '../../css/s/s4hxl1lwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezodczb5s"/><path clip-rule="evenodd" class="s4hxl1lwq"/>`,
		"fallback": "basil:adobe-indesign-solid",
	});
}

export default Component;
