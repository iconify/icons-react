import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj2-olrwi.css';
import '../../css/i/ii3oq8bus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj2-olrwi"/><path class="ii3oq8bus"/>`,
		"fallback": "garden:clock-arrow-left-fill-20",
	});
}

export default Component;
