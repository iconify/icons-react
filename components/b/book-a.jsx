import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wnxln3bbv.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wnxln3bbv"/><path class="icjlvdb0c"/><path class="zlhh38l7r"/></g>`,
		"fallback": "hugeicons:book-a",
	});
}

export default Component;
