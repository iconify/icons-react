import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc0llq_tf.css';
import '../../css/l/l12z44bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc0llq_tf"/><path clip-rule="evenodd" class="l12z44bdr"/>`,
		"fallback": "streamline-logos:cryengine-logo-solid",
	});
}

export default Component;
