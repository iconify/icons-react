import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msv92hb5b.css';
import '../../css/h/h8po8dbte.css';
import '../../css/b/bwvpembku.css';
import '../../css/s/sxt9xbc4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msv92hb5b"/><path class="h8po8dbte"/><path class="bwvpembku"/><path class="sxt9xbc4k"/></g>`,
		"fallback": "lucide-extended:doghouse-duotone",
	});
}

export default Component;
