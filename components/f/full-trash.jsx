import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur-ntnenv.css';
import '../../css/k/kgjor1bvy.css';
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
		"content": `<path class="ur-ntnenv"/><path class="kgjor1bvy"/><path class="hakimgbod"/><path class="p9b78ab8a"/>`,
		"fallback": "flat-color-icons:full-trash",
	});
}

export default Component;
