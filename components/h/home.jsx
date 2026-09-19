import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qobvjnbgt.css';
import '../../css/b/bslnj-b8x.css';
import '../../css/b/bo2l3sb1w.css';
import '../../css/z/zro-8opor.css';
import '../../css/r/rmk9j6bjs.css';
import '../../css/c/cyz7hxbva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qobvjnbgt"/><path class="bslnj-b8x"/><path class="bo2l3sb1w"/><path class="zro-8opor"/><path class="rmk9j6bjs"/><path class="cyz7hxbva"/>`,
		"fallback": "flat-color-icons:home",
	});
}

export default Component;
