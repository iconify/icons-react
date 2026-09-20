import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3j5tbb3r.css';
import '../../css/p/p1hlxdb5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3j5tbb3r"/><path clip-rule="evenodd" class="p1hlxdb5d"/>`,
		"fallback": "qlementine-icons:discord-16",
	});
}

export default Component;
