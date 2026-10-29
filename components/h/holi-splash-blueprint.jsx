import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lt5xwl8wq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/q/q1cf76b1y.css';
import '../../css/v/vcgs09bvz.css';
import '../../css/z/z_gp07k5w.css';
import '../../css/p/p30kfzf8q.css';
import '../../css/w/w78vqzb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lt5xwl8wq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="q1cf76b1y wm-k"/><path class="vcgs09bvz wm-a"/><circle class="wm-s z_gp07k5w"/><circle class="p30kfzf8q wm-s"/><circle class="w78vqzb7k wm-s"/></g>`,
		"fallback": "withicons:holi-splash-blueprint",
	});
}

export default Component;
