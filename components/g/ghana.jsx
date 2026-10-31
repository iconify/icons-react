import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgu_qf8mr.css';
import '../../css/d/dz--kkbng.css';
import '../../css/w/wj8_6-ths.css';
import '../../css/k/kgq3d9qlz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgu_qf8mr"/><path class="dz--kkbng"/><path class="wj8_6-ths"/><path class="kgq3d9qlz"/>`,
		"fallback": "tabler-flags:ghana",
	});
}

export default Component;
