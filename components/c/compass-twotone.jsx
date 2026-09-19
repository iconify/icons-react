import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceaf9c7tx.css';
import '../../css/w/wzastfpvt.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceaf9c7tx"/><path class="wzastfpvt"/><path class="yv_brepse"/>`,
		"fallback": "ant-design:compass-twotone",
	});
}

export default Component;
