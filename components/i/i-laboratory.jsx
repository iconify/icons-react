import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbtlfqbcg.css';
import '../../css/q/qoc3rw04c.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbtlfqbcg"/><path class="qoc3rw04c"/>`,
		"fallback": "medical-icon:i-laboratory",
	});
}

export default Component;
