import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc2fcx.css';
import '../../css/v/v1m4oy.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-6uh96y.css';
import '../../css/d/d-t2f-vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc2fcx"/><path class="v1m4oy"/>`,
		"fallback": "line-md:cloud-alt-upload",
	});
}

export default Component;
