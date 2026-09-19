import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq9cz2bqu.css';
import '../../css/t/t_zwr_bwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq9cz2bqu"/><path transform="scale(.6321 .94815)" class="t_zwr_bwh"/>`,
		"fallback": "flag:es-ct-1x1",
	});
}

export default Component;
