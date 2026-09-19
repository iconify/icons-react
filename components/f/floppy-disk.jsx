import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq-_jebgn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq-_jebgn"/>`,
		"fallback": "icomoon-free:floppy-disk",
	});
}

export default Component;
