import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zht8thbji.css';
import '../../css/q/qb4cy_fkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zht8thbji"/><path class="qb4cy_fkc"/>`,
		"fallback": "prime:clone",
	});
}

export default Component;
