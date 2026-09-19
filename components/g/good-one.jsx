import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxmk_0bvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxmk_0bvk"/>`,
		"fallback": "icon-park-outline:good-one",
	});
}

export default Component;
