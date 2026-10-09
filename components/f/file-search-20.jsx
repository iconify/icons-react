import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zevx3_zmp.css';
import '../../css/a/anynp2b3h.css';
import '../../css/c/cn7q8feaf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zevx3_zmp"/><path class="anynp2b3h"/><path class="cn7q8feaf"/>`,
		"fallback": "energy-icons:file-search-20",
	});
}

export default Component;
