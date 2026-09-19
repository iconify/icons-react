import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fklqo_fws.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fklqo_fws"/>`,
		"fallback": "gis:flag-finish",
	});
}

export default Component;
