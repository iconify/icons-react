import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeyvl7vpf.css';
import '../../css/w/wzh_nvbqg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeyvl7vpf"/><path class="wzh_nvbqg"/>`,
		"fallback": "energy-icons:hot-tub-20",
	});
}

export default Component;
