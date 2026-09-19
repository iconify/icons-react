import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fufj9heoj.css';
import '../../css/g/g_c_o4b2g.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 fufj9heoj"/><path class="clr-i-solid clr-i-solid-path-2 g_c_o4b2g"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:clone-solid",
	});
}

export default Component;
