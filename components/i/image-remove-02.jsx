import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqz5_v7hs.css';
import '../../css/s/suzwvoinj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqz5_v7hs"/><path class="suzwvoinj"/></g>`,
		"fallback": "hugeicons:image-remove-02",
	});
}

export default Component;
