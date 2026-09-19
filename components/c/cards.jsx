import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yym554b5s.css';
import '../../css/z/zfnnsw3af.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yym554b5s"/><path class="zfnnsw3af"/></g>`,
		"fallback": "charm:cards",
	});
}

export default Component;
