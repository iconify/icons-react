import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhhac4b9m.css';
import '../../css/a/a2-rokb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhhac4b9m"/><path class="a2-rokb1d"/>`,
		"fallback": "file-icons:arc",
	});
}

export default Component;
