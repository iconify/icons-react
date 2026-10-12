import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx2i-_f1x.css';
import '../../css/j/jmjyizb5w.css';
import '../../css/r/rdu0fobrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yx2i-_f1x"/><path class="jmjyizb5w"/><path class="rdu0fobrt"/></g>`,
		"fallback": "lucide-extended:folder-open-dot-duotone",
	});
}

export default Component;
