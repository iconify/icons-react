import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnzeedbwl.css';
import '../../css/s/s1c9mbcsk.css';
import '../../css/k/kcqns6e2b.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 dnzeedbwl"/><path class="clr-i-solid clr-i-solid-path-2 s1c9mbcsk"/><path class="clr-i-solid clr-i-solid-path-3 kcqns6e2b"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:hourglass-solid",
	});
}

export default Component;
