import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jomh8wtzj.css';
import '../../css/j/j2o7b7b0q.css';
import '../../css/o/o-ol994oi.css';
import '../../css/h/hzf583jyg.css';
import '../../css/n/ne_2ukb4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="jomh8wtzj"/><path class="j2o7b7b0q"/><path class="o-ol994oi"/><path class="hzf583jyg"/><path class="ne_2ukb4o"/></g>`,
		"fallback": "icon-park:facial-mask",
	});
}

export default Component;
