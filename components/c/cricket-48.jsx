import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezw6blbcm.css';
import '../../css/p/pwe_-ab6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezw6blbcm"/><path class="pwe_-ab6j"/>`,
		"fallback": "energy-icons:cricket-48",
	});
}

export default Component;
