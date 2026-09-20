import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnt67v5tf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnt67v5tf"/>`,
		"fallback": "picon:facebook",
	});
}

export default Component;
