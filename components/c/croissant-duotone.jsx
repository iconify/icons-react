import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie2v4kb6j.css';
import '../../css/i/id7d1qbgo.css';
import '../../css/x/xraqxobnj.css';
import '../../css/l/l9paz7bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie2v4kb6j"/><path class="id7d1qbgo"/><path class="xraqxobnj"/><path class="l9paz7bvw"/></g>`,
		"fallback": "lucide-extended:croissant-duotone",
	});
}

export default Component;
