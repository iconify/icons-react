import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/okyx88ohi.css';
import '../../css/m/mlih5bceo.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="okyx88ohi"/><path class="mlih5bceo"/><path class="zlhh38l7r"/></g>`,
		"fallback": "hugeicons:book-headphones",
	});
}

export default Component;
