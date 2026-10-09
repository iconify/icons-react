import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-oonistw.css';
import '../../css/b/b9083lrix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-oonistw"/><path class="b9083lrix"/>`,
		"fallback": "energy-icons:crane-hook-20",
	});
}

export default Component;
