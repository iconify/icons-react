import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5tparb-y.css';
import '../../css/n/na_x8vbwq.css';
import '../../css/o/oezn8xk0e.css';
import '../../css/w/wos6is2ia.css';
import '../../css/q/qer_0rbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5tparb-y"/><path class="na_x8vbwq"/><path clip-rule="evenodd" class="oezn8xk0e"/><path class="wos6is2ia"/><path clip-rule="evenodd" class="qer_0rbch"/>`,
		"fallback": "stash:article-share-light",
	});
}

export default Component;
