import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0ezugyfx.css';
import '../../css/t/t1g-4iyfd.css';
import '../../css/o/oc8t1qu1g.css';
import '../../css/i/iqzxk5bfh.css';
import '../../css/k/krut1qckz.css';
import '../../css/e/e4w4cacyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0ezugyfx"/><path class="t1g-4iyfd"/><path class="oc8t1qu1g"/><circle class="iqzxk5bfh"/><circle class="krut1qckz"/><path class="e4w4cacyv"/>`,
		"fallback": "flag:az-1x1",
	});
}

export default Component;
