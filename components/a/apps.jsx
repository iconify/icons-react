import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fd-ahacbo.css';
import '../../css/j/joa4c8oic.css';
import '../../css/e/eaxacq3vs.css';
import '../../css/b/b8ccrhvkv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="fd-ahacbo"/><rect class="joa4c8oic"/><rect class="eaxacq3vs"/><rect class="b8ccrhvkv"/></g>`,
		"fallback": "charm:apps",
	});
}

export default Component;
