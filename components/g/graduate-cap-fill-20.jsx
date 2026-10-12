import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfu_5sb2s.css';
import '../../css/z/zu9il-bqu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfu_5sb2s"/><path class="zu9il-bqu"/>`,
		"fallback": "garden:graduate-cap-fill-20",
	});
}

export default Component;
