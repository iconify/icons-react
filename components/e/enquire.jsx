import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/g-wkuab2i.css';
import '../../css/n/n0zqm8odz.css';
import '../../css/y/yh8iq_b5d.css';
import '../../css/b/b7nrt6bdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="g-wkuab2i"/><path class="n0zqm8odz"/><path class="yh8iq_b5d"/><path class="b7nrt6bdf"/></g>`,
		"fallback": "icon-park:enquire",
	});
}

export default Component;
