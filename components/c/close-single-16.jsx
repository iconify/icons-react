import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9m3agbju.css';
import '../../css/z/zc_lys0dy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9m3agbju"/><path clip-rule="evenodd" class="zc_lys0dy"/>`,
		"fallback": "qlementine-icons:close-single-16",
	});
}

export default Component;
