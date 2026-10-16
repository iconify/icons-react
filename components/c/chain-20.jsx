import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6mu4cbgx.css';
import '../../css/e/eqj_f_bga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6mu4cbgx"/><path class="eqj_f_bga"/>`,
		"fallback": "energy-icons:chain-20",
	});
}

export default Component;
