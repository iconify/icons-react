import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7r_6rw6k.css';
import '../../css/s/sr1rblb4o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7r_6rw6k"/><path class="sr1rblb4o"/>`,
		"fallback": "energy-icons:film-reel-20",
	});
}

export default Component;
