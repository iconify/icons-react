import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/janyzvilq.css';
import '../../css/g/gowt0db6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="janyzvilq"/><path class="gowt0db6w"/></g>`,
		"fallback": "hugeicons:image-02",
	});
}

export default Component;
