import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq92k6g1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq92k6g1c"/>`,
		"fallback": "subway:down-2",
	});
}

export default Component;
