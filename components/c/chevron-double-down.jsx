import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iyr42hbgw.css';
import '../../css/t/ttjigk_fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iyr42hbgw"/><path class="ttjigk_fe"/></g>`,
		"fallback": "stash:chevron-double-down",
	});
}

export default Component;
