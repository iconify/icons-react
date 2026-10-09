import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm8uiwbzj.css';
import '../../css/w/w2ncw7b4j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm8uiwbzj"/><path class="w2ncw7b4j"/>`,
		"fallback": "energy-icons:connector-type1-20-bold",
	});
}

export default Component;
