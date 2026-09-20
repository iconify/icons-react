import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwb5pczfv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwb5pczfv"/>`,
		"fallback": "zondicons:battery-half",
	});
}

export default Component;
