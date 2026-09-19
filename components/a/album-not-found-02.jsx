import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b43hu-ogi.css';
import '../../css/z/zgoojs0gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b43hu-ogi"/><path class="zgoojs0gb"/></g>`,
		"fallback": "hugeicons:album-not-found-02",
	});
}

export default Component;
