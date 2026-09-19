import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivoyk3bek.css';
import '../../css/f/fmgf82-9s.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivoyk3bek"/><path class="fmgf82-9s"/>`,
		"fallback": "gis:compass-rose-n",
	});
}

export default Component;
