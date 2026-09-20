import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv0et_yeu.css';
import '../../css/g/gfzaxkurt.css';

const viewBox = {"width":100,"height":129.378};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv0et_yeu"/><path class="gfzaxkurt"/>`,
		"fallback": "thesvg-color:cornell-university",
	});
}

export default Component;
