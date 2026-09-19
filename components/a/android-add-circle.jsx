import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzaqfr98w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzaqfr98w"/>`,
		"fallback": "ion:android-add-circle",
	});
}

export default Component;
