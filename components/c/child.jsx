import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdvsm5ash.css';
import '../../css/s/sm0fnnq5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdvsm5ash"/><path class="sm0fnnq5y"/>`,
		"fallback": "cil:child",
	});
}

export default Component;
