import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l18em4bxj.css';
import '../../css/t/ts9-onmui.css';
import '../../css/r/rkzw689zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l18em4bxj"/><path class="ts9-onmui"/><path class="rkzw689zh"/>`,
		"fallback": "pixel:data-science",
	});
}

export default Component;
