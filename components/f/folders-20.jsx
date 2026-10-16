import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3n57acnu.css';
import '../../css/u/ufjhi98xb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3n57acnu"/><path class="ufjhi98xb"/>`,
		"fallback": "energy-icons:folders-20",
	});
}

export default Component;
