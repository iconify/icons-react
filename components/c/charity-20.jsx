import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhxatuodl.css';
import '../../css/m/medb0fb1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhxatuodl"/><path class="medb0fb1f"/>`,
		"fallback": "energy-icons:charity-20",
	});
}

export default Component;
