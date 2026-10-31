import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4bsj3b4y.css';
import '../../css/e/eoahs_b8g.css';
import '../../css/w/wbq43rb5g.css';
import '../../css/g/g7-s2nbhk.css';
import '../../css/l/l2w_hyait.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4bsj3b4y"/><path class="eoahs_b8g"/><path class="wbq43rb5g"/><path class="g7-s2nbhk"/><path class="l2w_hyait"/>`,
		"fallback": "tabler-flags:guyana",
	});
}

export default Component;
