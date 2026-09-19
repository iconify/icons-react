import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn3rmhbxf.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dn3rmhbxf"/><path class="zlhh38l7r"/></g>`,
		"fallback": "hugeicons:book-03",
	});
}

export default Component;
