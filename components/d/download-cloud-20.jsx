import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkdf61nwz.css';
import '../../css/h/hubzclpum.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkdf61nwz"/><path class="hubzclpum"/>`,
		"fallback": "energy-icons:download-cloud-20",
	});
}

export default Component;
