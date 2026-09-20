import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s37u5-ydv.css';
import '../../css/i/i_82ckbxh.css';
import '../../css/k/kbdolkbrx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s37u5-ydv"/><path class="i_82ckbxh"/><circle class="kbdolkbrx"/>`,
		"fallback": "material-icon-theme:folder-circleci-open",
	});
}

export default Component;
