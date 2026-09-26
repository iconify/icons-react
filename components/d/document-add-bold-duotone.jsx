import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/o/o1cm0nmqw.css';
import '../../css/q/qvk8skbsz.css';
import '../../css/a/a5ennrb7p.css';
import '../../css/y/yt-au7bps.css';
import '../../css/p/pzc7drbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path class="o1cm0nmqw"/><path class="qvk8skbsz"/><path class="a5ennrb7p"/><path class="yt-au7bps"/><path class="pzc7drbyp"/></g>`,
		"fallback": "solar:document-add-bold-duotone",
	});
}

export default Component;
