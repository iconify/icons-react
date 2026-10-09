import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbybcrbbp.css';
import '../../css/o/olr0j3b3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbybcrbbp"/><path class="olr0j3b3v"/>`,
		"fallback": "energy-icons:alert-20",
	});
}

export default Component;
