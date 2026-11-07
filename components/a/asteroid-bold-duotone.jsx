import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfr3lgz9t.css';
import '../../css/x/xtajaob6f.css';
import '../../css/k/k5ombdfvg.css';
import '../../css/c/c-0ykybsp.css';
import '../../css/g/gofzjeb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfr3lgz9t"/><path class="xtajaob6f"/><path class="k5ombdfvg"/><path class="c-0ykybsp"/><path class="gofzjeb0k"/>`,
		"fallback": "solar:asteroid-bold-duotone",
	});
}

export default Component;
