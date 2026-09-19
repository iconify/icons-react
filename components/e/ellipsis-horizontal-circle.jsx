import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuejpjjmz.css';
import '../../css/b/be4ff7bzh.css';
import '../../css/z/zhu4enjix.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vuejpjjmz"/><circle class="be4ff7bzh"/><circle class="zhu4enjix"/><path class="lsg5j7ibl"/>`,
		"fallback": "famicons:ellipsis-horizontal-circle",
	});
}

export default Component;
