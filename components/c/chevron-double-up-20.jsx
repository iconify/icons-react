import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whfucbber.css';
import '../../css/v/v1vmo492j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whfucbber"/><path class="v1vmo492j"/>`,
		"fallback": "garden:chevron-double-up-20",
	});
}

export default Component;
