import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgrlpfb5w.css';
import '../../css/n/nm7yi4b_v.css';
import '../../css/n/npaoi6s8i.css';
import '../../css/e/ezv6ukqwd.css';
import '../../css/f/fi82jxbht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xgrlpfb5w"/><circle class="nm7yi4b_v"/><path class="npaoi6s8i"/><circle class="ezv6ukqwd"/><path class="fi82jxbht"/>`,
		"fallback": "ion:git-merge-outline",
	});
}

export default Component;
