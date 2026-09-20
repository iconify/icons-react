import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdjq2-vym.css';
import '../../css/x/xgndkg1rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdjq2-vym"/><path class="xgndkg1rh"/>`,
		"fallback": "lets-icons:blank-alt-duotone",
	});
}

export default Component;
