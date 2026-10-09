import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suy8wqlre.css';
import '../../css/r/rxepc7-8f.css';
import '../../css/n/ni152fyap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suy8wqlre"/><path class="rxepc7-8f"/><path class="ni152fyap"/>`,
		"fallback": "energy-icons:castle-20",
	});
}

export default Component;
