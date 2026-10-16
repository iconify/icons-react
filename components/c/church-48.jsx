import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zokq24bza.css';
import '../../css/l/l6xxjlbxd.css';
import '../../css/x/x0sft3bom.css';
import '../../css/q/q7i-lqwlm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zokq24bza"/><path class="l6xxjlbxd"/><path class="x0sft3bom"/><path class="q7i-lqwlm"/>`,
		"fallback": "energy-icons:church-48",
	});
}

export default Component;
