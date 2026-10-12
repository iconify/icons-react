import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy0ytxb8k.css';
import '../../css/u/uuwehzblr.css';
import '../../css/t/tko5-p9vc.css';
import '../../css/v/v9571zpse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy0ytxb8k"/><path class="uuwehzblr"/><path class="tko5-p9vc"/><path class="v9571zpse"/>`,
		"fallback": "energy-icons:broom-20-bold",
	});
}

export default Component;
