import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rln3ffbom.css';
import '../../css/x/xxfcmckbc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rln3ffbom"/><path class="xxfcmckbc"/>`,
		"fallback": "energy-icons:cast-20",
	});
}

export default Component;
