import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kye07wy2c.css';
import '../../css/b/bz70mjb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kye07wy2c"/><path clip-rule="evenodd" class="bz70mjb3v"/>`,
		"fallback": "solar:file-favourite-bold",
	});
}

export default Component;
