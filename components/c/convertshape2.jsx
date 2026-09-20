import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs2yaobzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs2yaobzm"/>`,
		"fallback": "reicon:convertshape2",
	});
}

export default Component;
