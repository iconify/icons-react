import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v92narh8z.css';
import '../../css/n/n_0wpi5uj.css';
import '../../css/s/st3gmcb9b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v92narh8z"/><path class="n_0wpi5uj"/><path class="st3gmcb9b"/>`,
		"fallback": "iconito:baguette",
	});
}

export default Component;
