import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_-r70b7z.css';
import '../../css/a/axfcjcbgh.css';
import '../../css/u/ua_sik_-v.css';
import '../../css/p/pfbai9q-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_-r70b7z"/><path class="axfcjcbgh"/><path class="ua_sik_-v"/><path class="pfbai9q-o"/></g>`,
		"fallback": "lucide-extended:candy-duotone",
	});
}

export default Component;
