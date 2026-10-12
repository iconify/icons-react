import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3y55cchp.css';
import '../../css/r/rkfducbyk.css';
import '../../css/v/vk46ucctf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3y55cchp"/><path class="rkfducbyk"/><path class="vk46ucctf"/>`,
		"fallback": "energy-icons:abacus-20",
	});
}

export default Component;
