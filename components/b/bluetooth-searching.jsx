import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i6lvzy91f.css';
import '../../css/x/x_3mgpb4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i6lvzy91f"/><path class="x_3mgpb4r"/></g>`,
		"fallback": "charm:bluetooth-searching",
	});
}

export default Component;
