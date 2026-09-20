import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1ycc83rv.css';
import '../../css/r/r2xj4w28y.css';
import '../../css/t/t4hr1zepd.css';
import '../../css/k/kyl08dl-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1ycc83rv"/><path class="r2xj4w28y"/><path class="t4hr1zepd"/><path class="kyl08dl-g"/>`,
		"fallback": "token:ethx",
	});
}

export default Component;
