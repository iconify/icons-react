import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciq8kjb7u.css';
import '../../css/o/ob9cd8xhy.css';
import '../../css/a/av0rcu6kc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ciq8kjb7u"/><path class="ob9cd8xhy"/><path class="av0rcu6kc"/>`,
		"fallback": "cil:disabled",
	});
}

export default Component;
