import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajm915b5r.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajm915b5r"/>`,
		"fallback": "fa-solid:drum-steelpan",
	});
}

export default Component;
