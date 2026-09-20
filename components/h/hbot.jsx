import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu6jtuk4j.css';
import '../../css/w/wk-ulfo7h.css';
import '../../css/b/barxdr7sk.css';
import '../../css/y/yyjfcnuud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu6jtuk4j"/><path class="wk-ulfo7h"/><path class="barxdr7sk"/><path class="yyjfcnuud"/>`,
		"fallback": "token:hbot",
	});
}

export default Component;
