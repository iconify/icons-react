import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag0bvbcgf.css';
import '../../css/g/gampl1_hh.css';
import '../../css/b/b0z-l4tfm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag0bvbcgf"/><path class="gampl1_hh"/><path class="b0z-l4tfm"/>`,
		"fallback": "energy-icons:cable-landing-20-bold",
	});
}

export default Component;
