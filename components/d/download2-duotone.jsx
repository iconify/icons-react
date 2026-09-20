import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/htrsjub3v.css';
import '../../css/v/v59zi6umi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="htrsjub3v"/><path class="v59zi6umi"/></g>`,
		"fallback": "reicon:download2-duotone",
	});
}

export default Component;
