import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq1tynbis.css';
import '../../css/s/sq8u2euwj.css';
import '../../css/l/l6n_mmb1f.css';
import '../../css/u/u5tmx4bng.css';
import '../../css/u/uvemerbei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq1tynbis"/><path class="sq8u2euwj"/><path class="l6n_mmb1f"/><path class="u5tmx4bng"/><path class="uvemerbei"/>`,
		"fallback": "energy-icons:community-energy-20-bold",
	});
}

export default Component;
