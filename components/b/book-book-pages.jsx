import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ess0w888a.css';
import '../../css/h/ht3ffrbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ess0w888a"/><path class="ht3ffrbdu"/></g>`,
		"fallback": "streamline-ultimate:book-book-pages",
	});
}

export default Component;
