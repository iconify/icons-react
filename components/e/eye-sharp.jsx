import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shexgfo6g.css';
import '../../css/w/wsjn089ma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="shexgfo6g"/><path class="wsjn089ma"/>`,
		"fallback": "famicons:eye-sharp",
	});
}

export default Component;
