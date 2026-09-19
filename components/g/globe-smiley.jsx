import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sws1y7b5y.css';
import '../../css/a/a8-k6ckwt.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sws1y7b5y"/><path class="a8-k6ckwt"/>`,
		"fallback": "gis:globe-smiley",
	});
}

export default Component;
