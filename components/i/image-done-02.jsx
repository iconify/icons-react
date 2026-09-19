import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqz5_v7hs.css';
import '../../css/k/kl7kwjb-j.css';
import '../../css/w/w7623vb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqz5_v7hs"/><path class="kl7kwjb-j"/><path class="w7623vb4t"/></g>`,
		"fallback": "hugeicons:image-done-02",
	});
}

export default Component;
