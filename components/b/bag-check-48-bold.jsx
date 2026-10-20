import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqivvfbyi.css';
import '../../css/z/z6525nbnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqivvfbyi"/><path class="z6525nbnq"/>`,
		"fallback": "energy-icons:bag-check-48-bold",
	});
}

export default Component;
