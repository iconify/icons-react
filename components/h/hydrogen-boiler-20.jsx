import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkestgbmb.css';
import '../../css/k/kc-33db0z.css';
import '../../css/w/wdh6v20fa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkestgbmb"/><path class="kc-33db0z"/><path class="wdh6v20fa"/>`,
		"fallback": "energy-icons:hydrogen-boiler-20",
	});
}

export default Component;
