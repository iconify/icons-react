import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmy3d-kvd.css';
import '../../css/w/wrxj3qbif.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xmy3d-kvd"/><path class="wrxj3qbif"/></g>`,
		"fallback": "cryptocurrency-color:dai",
	});
}

export default Component;
