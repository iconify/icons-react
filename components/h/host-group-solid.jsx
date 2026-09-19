import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj4k9vbys.css';
import '../../css/u/u9khomb7b.css';
import '../../css/i/ivnorzbfh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 rj4k9vbys"/><path class="clr-i-solid clr-i-solid-path-2 u9khomb7b"/><path class="clr-i-solid clr-i-solid-path-3 ivnorzbfh"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:host-group-solid",
	});
}

export default Component;
