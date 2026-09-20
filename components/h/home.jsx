import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w16t2pppu.css';
import '../../css/q/q9-pcgbxd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w16t2pppu"/><path class="q9-pcgbxd"/>`,
		"fallback": "nimbus:home",
	});
}

export default Component;
