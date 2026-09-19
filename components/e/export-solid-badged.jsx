import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2b841tai.css';
import '../../css/a/ahtx8l_gy.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2b841tai clr-i-solid--badged clr-i-solid-path-1--badged"/><path class="ahtx8l_gy clr-i-solid--badged clr-i-solid-path-2--badged"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:export-solid-badged",
	});
}

export default Component;
