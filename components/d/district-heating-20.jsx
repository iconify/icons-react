import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kko00cc3q.css';
import '../../css/f/fpxrp7fka.css';
import '../../css/e/e_u3u9v2b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kko00cc3q"/><path class="fpxrp7fka"/><path class="e_u3u9v2b"/>`,
		"fallback": "energy-icons:district-heating-20",
	});
}

export default Component;
