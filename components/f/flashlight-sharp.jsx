import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prcy1udmo.css';
import '../../css/j/jnlj8ybtf.css';
import '../../css/j/jn0obg5tf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prcy1udmo"/><ellipse class="jnlj8ybtf"/><path class="jn0obg5tf"/>`,
		"fallback": "ion:flashlight-sharp",
	});
}

export default Component;
