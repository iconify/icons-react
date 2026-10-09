import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1xo7-eok.css';
import '../../css/r/rr_64kzjn.css';
import '../../css/l/lxxd1u4jy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1xo7-eok"/><path class="rr_64kzjn"/><path class="lxxd1u4jy"/>`,
		"fallback": "energy-icons:archery-48-bold",
	});
}

export default Component;
