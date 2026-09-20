import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg7hmzy4m.css';
import '../../css/j/jh2kfpbhx.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg7hmzy4m"/><path class="jh2kfpbhx"/><circle class="k79q3xboj"/>`,
		"fallback": "ooui:image-lock-ltr",
	});
}

export default Component;
