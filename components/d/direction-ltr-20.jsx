import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0hk93biq.css';
import '../../css/u/ufxw6wkpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0hk93biq"/><path class="ufxw6wkpy"/>`,
		"fallback": "garden:direction-ltr-20",
	});
}

export default Component;
