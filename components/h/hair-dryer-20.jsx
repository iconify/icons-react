import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abwkqfblz.css';
import '../../css/j/j7p02hblv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abwkqfblz"/><path class="j7p02hblv"/>`,
		"fallback": "energy-icons:hair-dryer-20",
	});
}

export default Component;
