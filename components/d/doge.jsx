import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aepzuabco.css';
import '../../css/g/gqgo7nzta.css';
import '../../css/v/vv-f_hbum.css';
import '../../css/k/knae6-b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aepzuabco"/><path class="gqgo7nzta"/><path class="vv-f_hbum"/><path class="knae6-b4y"/></g>`,
		"fallback": "tdesign:doge",
	});
}

export default Component;
