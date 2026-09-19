import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjeo63xsa.css';
import '../../css/k/kys_ktn6s.css';
import '../../css/y/ybh8gmbrc.css';
import '../../css/v/vmbns7bhy.css';
import '../../css/q/qz8r20h-u.css';
import '../../css/m/mgu3agb2r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjeo63xsa"/><path class="kys_ktn6s"/><circle class="ybh8gmbrc"/><circle class="vmbns7bhy"/><circle class="qz8r20h-u"/><circle class="mgu3agb2r"/>`,
		"fallback": "carbon:game-console",
	});
}

export default Component;
