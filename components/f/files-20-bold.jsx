import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3tz4sp-n.css';
import '../../css/a/ad2r2ebzw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3tz4sp-n"/><path class="ad2r2ebzw"/>`,
		"fallback": "energy-icons:files-20-bold",
	});
}

export default Component;
