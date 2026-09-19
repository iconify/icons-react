import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1xq9pboe.css';
import '../../css/c/cpzpl-ooe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1xq9pboe"/><path class="cpzpl-ooe"/>`,
		"fallback": "bxl:imdb",
	});
}

export default Component;
