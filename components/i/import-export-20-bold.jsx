import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itv0f-bax.css';
import '../../css/n/ncx05ab2q.css';
import '../../css/t/tthe00koa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itv0f-bax"/><path class="ncx05ab2q"/><path class="tthe00koa"/>`,
		"fallback": "energy-icons:import-export-20-bold",
	});
}

export default Component;
