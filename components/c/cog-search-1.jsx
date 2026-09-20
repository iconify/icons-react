import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jou1-acod.css';
import '../../css/a/a2jebib3q.css';
import '../../css/a/aium6ybfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jou1-acod"/><path class="a2jebib3q"/><path class="aium6ybfl"/></g>`,
		"fallback": "streamline-ultimate:cog-search-1",
	});
}

export default Component;
