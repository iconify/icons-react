import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/a/a9kvypgwx.css';
import '../../css/p/p448erh6w.css';
import '../../css/q/qshq41bhj.css';
import '../../css/k/keict1a9f.css';
import '../../css/i/i2717i09o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="a9kvypgwx"/><path class="p448erh6w"/><path class="qshq41bhj"/><path class="keict1a9f"/><path class="i2717i09o"/></g>`,
		"fallback": "streamline-kameleon-color:antenna",
	});
}

export default Component;
