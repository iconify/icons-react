import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gahgzf5qd.css';
import '../../css/l/l90d81ian.css';
import '../../css/b/bi6je-11k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gahgzf5qd"/><path class="l90d81ian"/><path class="bi6je-11k"/>`,
		"fallback": "energy-icons:bag-plus-20",
	});
}

export default Component;
