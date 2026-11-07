import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v805mjb0m.css';
import '../../css/r/rsyxy_bjw.css';
import '../../css/n/n_7s633jr.css';
import '../../css/o/ozyqj7xnu.css';
import '../../css/l/l8qjdd5rb.css';
import '../../css/a/at66jg_ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v805mjb0m"/><path class="rsyxy_bjw"/><path class="n_7s633jr"/><path class="ozyqj7xnu"/><path class="l8qjdd5rb"/><path class="at66jg_ss"/>`,
		"fallback": "solar:cloud-rain-outline",
	});
}

export default Component;
