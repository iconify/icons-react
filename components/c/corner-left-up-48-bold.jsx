import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1uuebynj.css';
import '../../css/s/se19vpb9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1uuebynj"/><path class="se19vpb9a"/>`,
		"fallback": "energy-icons:corner-left-up-48-bold",
	});
}

export default Component;
