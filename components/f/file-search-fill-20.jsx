import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5nfh-t8z.css';
import '../../css/g/gzx0z1m6h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5nfh-t8z"/><path class="gzx0z1m6h"/>`,
		"fallback": "garden:file-search-fill-20",
	});
}

export default Component;
