import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/y/y7yylybwp.css';
import '../../css/k/k4l731bte.css';
import '../../css/t/typd81uhy.css';
import '../../css/b/bxo7hgbnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="y7yylybwp"/><path class="k4l731bte"/><path class="typd81uhy"/><path class="bxo7hgbnc"/></g>`,
		"fallback": "streamline-plump:ai-edit-robot",
	});
}

export default Component;
