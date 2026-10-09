import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4bjo-bjt.css';
import '../../css/v/v4ji3vb6c.css';
import '../../css/g/gqvbnmbwy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4bjo-bjt"/><path class="v4ji3vb6c"/><path class="gqvbnmbwy"/>`,
		"fallback": "energy-icons:flange-20",
	});
}

export default Component;
