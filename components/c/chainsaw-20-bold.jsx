import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyhy5lb0z.css';
import '../../css/c/cxf3gybkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyhy5lb0z"/><path class="cxf3gybkq"/>`,
		"fallback": "energy-icons:chainsaw-20-bold",
	});
}

export default Component;
