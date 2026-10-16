import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z33pyccyt.css';
import '../../css/l/lv57wviqe.css';
import '../../css/a/acc7p2d0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z33pyccyt"/><path class="lv57wviqe"/><path class="acc7p2d0m"/>`,
		"fallback": "energy-icons:earth-layers-48",
	});
}

export default Component;
