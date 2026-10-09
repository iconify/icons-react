import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix-bwb7j.css';
import '../../css/u/ugwcjbfyo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix-bwb7j"/><path class="ugwcjbfyo"/>`,
		"fallback": "energy-icons:hydro-plant-20",
	});
}

export default Component;
