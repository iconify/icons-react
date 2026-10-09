import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd7xtmwmp.css';
import '../../css/v/v33j91b-f.css';
import '../../css/w/wo9nd_b1u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd7xtmwmp"/><path class="v33j91b-f"/><path class="wo9nd_b1u"/>`,
		"fallback": "energy-icons:cable-landing-20",
	});
}

export default Component;
