import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfzmnvd-w.css';
import '../../css/k/kz8f7vbhi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfzmnvd-w"/><path class="kz8f7vbhi"/>`,
		"fallback": "energy-icons:arrow-up-20",
	});
}

export default Component;
