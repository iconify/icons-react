import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqfs-8dip.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqfs-8dip"/>`,
		"fallback": "energy-icons:gold-bar-20",
	});
}

export default Component;
