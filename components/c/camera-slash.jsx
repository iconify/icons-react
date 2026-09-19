import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7w50vvhh.css';
import '../../css/r/rgxtolv2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7w50vvhh"/><path class="rgxtolv2o"/>`,
		"fallback": "boxicons:camera-slash",
	});
}

export default Component;
