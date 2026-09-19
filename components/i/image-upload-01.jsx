import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf6sm2mwe.css';
import '../../css/b/bx86_pbrz.css';
import '../../css/t/tlthtbchw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uf6sm2mwe"/><path class="bx86_pbrz"/><path class="tlthtbchw"/></g>`,
		"fallback": "hugeicons:image-upload-01",
	});
}

export default Component;
