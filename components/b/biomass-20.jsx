import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucvn8mbai.css';
import '../../css/k/k220q4beo.css';
import '../../css/j/j2pm5abdo.css';
import '../../css/l/l2mw_ubua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucvn8mbai"/><path class="k220q4beo"/><path class="j2pm5abdo"/><path class="l2mw_ubua"/>`,
		"fallback": "energy-icons:biomass-20",
	});
}

export default Component;
