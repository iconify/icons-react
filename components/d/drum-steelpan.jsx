import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgsxwe0_g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgsxwe0_g"/>`,
		"fallback": "fa7-solid:drum-steelpan",
	});
}

export default Component;
