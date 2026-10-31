import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j648mcboz.css';
import '../../css/i/iiv7b4kfn.css';
import '../../css/j/jggsly9mc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j648mcboz"/><path class="iiv7b4kfn"/><path class="jggsly9mc"/>`,
		"fallback": "tabler-flags:colombia",
	});
}

export default Component;
