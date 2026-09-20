import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4sh_ybhk.css';
import '../../css/z/zna4sbwyi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4sh_ybhk"/><path clip-rule="evenodd" class="zna4sbwyi"/>`,
		"fallback": "teenyicons:camera-solid",
	});
}

export default Component;
