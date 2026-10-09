import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzbu0ndxo.css';
import '../../css/z/zdzqfvyfv.css';
import '../../css/r/r5j29ko6j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzbu0ndxo"/><path class="zdzqfvyfv"/><path class="r5j29ko6j"/>`,
		"fallback": "energy-icons:crib-20",
	});
}

export default Component;
