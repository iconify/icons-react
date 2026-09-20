import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh6ubzb2y.css';
import '../../css/b/byjpcpbho.css';
import '../../css/h/h1p9bccth.css';
import '../../css/l/l_nf0hbpq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh6ubzb2y"/><path class="byjpcpbho"/><path class="h1p9bccth"/><path class="l_nf0hbpq"/>`,
		"fallback": "streamline-pixel:food-drink-sushi",
	});
}

export default Component;
