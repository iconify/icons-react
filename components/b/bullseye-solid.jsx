import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxexc8fbi.css';
import '../../css/d/d0k6rpegi.css';
import '../../css/a/ahmedv2xo.css';
import '../../css/c/cn6o7abvt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 pxexc8fbi"/><path class="clr-i-solid clr-i-solid-path-2 d0k6rpegi"/><path class="ahmedv2xo clr-i-solid clr-i-solid-path-3"/><path class="clr-i-solid clr-i-solid-path-4 cn6o7abvt"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bullseye-solid",
	});
}

export default Component;
