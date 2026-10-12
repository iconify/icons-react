import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4gyq6a4f.css';
import '../../css/o/oyi6v4b7q.css';
import '../../css/s/s78kz7brn.css';
import '../../css/c/c_bjunb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4gyq6a4f"/><path class="oyi6v4b7q"/><path class="s78kz7brn"/><path class="c_bjunb0o"/></g>`,
		"fallback": "lucide-extended:fence-duotone",
	});
}

export default Component;
