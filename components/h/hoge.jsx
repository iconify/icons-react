import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9p9d7btu.css';
import '../../css/w/wjrp0eb4n.css';
import '../../css/r/r4awi0brf.css';
import '../../css/e/ejphxzm1x.css';
import '../../css/n/nhsimxcaa.css';
import '../../css/z/zkk6yebqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9p9d7btu"/><path class="wjrp0eb4n"/><path class="r4awi0brf"/><path class="ejphxzm1x"/><path class="nhsimxcaa"/><path class="zkk6yebqj"/>`,
		"fallback": "token:hoge",
	});
}

export default Component;
