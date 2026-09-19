import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bxybecbsh.css';
import '../../css/a/ar1f_7a3n.css';
import '../../css/c/cdzqijmof.css';
import '../../css/t/t9--_tbuo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="bxybecbsh"/><path class="ar1f_7a3n"/><path class="cdzqijmof"/><path class="t9--_tbuo"/></g>`,
		"fallback": "icon-park:clothes-pants-short",
	});
}

export default Component;
