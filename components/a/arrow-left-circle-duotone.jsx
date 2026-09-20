import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/t/tqg7p7b5b.css';
import '../../css/p/pqzescb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="tqg7p7b5b"/><path class="pqzescb_s"/></g>`,
		"fallback": "si:arrow-left-circle-duotone",
	});
}

export default Component;
