import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdp0wccxg.css';
import '../../css/q/q8saz_b2a.css';

const viewBox = {"width":300,"height":194.955};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdp0wccxg"/><path class="q8saz_b2a"/>`,
		"fallback": "thesvg-color:citibank",
	});
}

export default Component;
