import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmhddevn.css';
import '../../css/u/ueg81y61d.css';
import '../../css/n/neag2rbvc.css';
import '../../css/u/uqlamj4tr.css';
import '../../css/b/bejlyabet.css';
import '../../css/x/xtvj63buk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lgmhddevn"/><path class="ueg81y61d"/><circle class="neag2rbvc"/><circle class="uqlamj4tr"/><circle class="bejlyabet"/><path class="xtvj63buk"/>`,
		"fallback": "carbon:data-view",
	});
}

export default Component;
