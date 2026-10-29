import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uow9c5bpy.css';
import '../../css/l/lt5xwl8wq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/kovqn7y-o.css';
import '../../css/u/ui37xobeh.css';
import '../../css/z/z18gy67wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uow9c5bpy wm-deco"/><path class="lt5xwl8wq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="kovqn7y-o wm-k"/><path class="ui37xobeh wm-a"/><path class="wm-a z18gy67wt"/></g>`,
		"fallback": "withicons:coins-blueprint",
	});
}

export default Component;
