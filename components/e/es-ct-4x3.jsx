import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy_h3mg2o.css';
import '../../css/t/t_zwr_bwh.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy_h3mg2o"/><path transform="scale(.79012 .88889)" class="t_zwr_bwh"/>`,
		"fallback": "flag:es-ct-4x3",
	});
}

export default Component;
