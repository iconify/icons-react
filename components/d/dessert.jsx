import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqolircih.css';
import '../../css/i/i2hg8q8zl.css';
import '../../css/z/zngy0fbvj.css';
import '../../css/h/hbs3nacwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="dqolircih"/><path class="i2hg8q8zl"/><path class="zngy0fbvj"/><path class="hbs3nacwe"/></g>`,
		"fallback": "hugeicons:dessert",
	});
}

export default Component;
