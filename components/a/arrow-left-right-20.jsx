import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ritkb0p_x.css';
import '../../css/w/wp6vfybzd.css';
import '../../css/j/jgrjg5bie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ritkb0p_x"/><path class="wp6vfybzd"/><path class="jgrjg5bie"/>`,
		"fallback": "energy-icons:arrow-left-right-20",
	});
}

export default Component;
