import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u577t-wix.css';
import '../../css/l/lni-fubjj.css';
import '../../css/g/g19v3vu6c.css';
import '../../css/r/rg12t7v9z.css';
import '../../css/a/aqf5pybap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u577t-wix"/><path class="lni-fubjj"/><path class="g19v3vu6c"/><path class="rg12t7v9z"/><path class="aqf5pybap"/></g>`,
		"fallback": "streamline-flex-color:ai-scanner-robot",
	});
}

export default Component;
