import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jisgs1lqi.css';
import '../../css/u/uktn-1b8e.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jisgs1lqi"/><path class="uktn-1b8e"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:boiler-alert-20",
	});
}

export default Component;
