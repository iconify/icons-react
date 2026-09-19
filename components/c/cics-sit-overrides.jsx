import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbvsrd_3o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbvsrd_3o"/>`,
		"fallback": "carbon:cics-sit-overrides",
	});
}

export default Component;
