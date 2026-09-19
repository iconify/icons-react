import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lljkc8ood.css';
import '../../css/c/cn4m4xbfq.css';
import '../../css/a/a1x6v0wfj.css';
import '../../css/z/zt_9-jbnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lljkc8ood"><path class="cn4m4xbfq"/><path class="a1x6v0wfj"/></g><path class="zt_9-jbnt"/>`,
		"fallback": "flat-color-icons:high-battery",
	});
}

export default Component;
