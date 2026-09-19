import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phr3r27xz.css';
import '../../css/z/z9r3_1dmr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phr3r27xz"/><path class="z9r3_1dmr"/>`,
		"fallback": "ant-design:customer-service-twotone",
	});
}

export default Component;
