import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka6cs0bzz.css';
import '../../css/r/rek-56b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka6cs0bzz"/><path class="rek-56b-o"/>`,
		"fallback": "boxicons:globe-stand-filled",
	});
}

export default Component;
