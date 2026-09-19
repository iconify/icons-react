import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hakimgbod.css';
import '../../css/p/p9b78ab8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hakimgbod"/><path class="p9b78ab8a"/>`,
		"fallback": "flat-color-icons:empty-trash",
	});
}

export default Component;
