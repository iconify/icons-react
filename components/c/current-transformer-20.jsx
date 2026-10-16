import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9i0psc1u.css';
import '../../css/d/d58o7tbnq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9i0psc1u"/><path class="d58o7tbnq"/>`,
		"fallback": "energy-icons:current-transformer-20",
	});
}

export default Component;
