import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shnc5m5hf.css';
import '../../css/c/cn4m4xbfq.css';
import '../../css/a/a1x6v0wfj.css';
import '../../css/a/axagtubtw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="shnc5m5hf"><path class="cn4m4xbfq"/><path class="a1x6v0wfj"/></g><path class="axagtubtw"/>`,
		"fallback": "flat-color-icons:charge-battery",
	});
}

export default Component;
