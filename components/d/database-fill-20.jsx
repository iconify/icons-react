import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp_ciybgk.css';
import '../../css/k/k-_lh2bbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp_ciybgk"/><path class="k-_lh2bbh"/>`,
		"fallback": "garden:database-fill-20",
	});
}

export default Component;
