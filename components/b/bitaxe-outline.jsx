import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bnqgp3bek.css';
import '../../css/t/t45dxeg-s.css';
import '../../css/m/mp0o2cb8i.css';
import '../../css/w/w7g_bfool.css';
import '../../css/c/cbje69b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="bnqgp3bek"/><path class="t45dxeg-s"/><path class="mp0o2cb8i"/><circle class="w7g_bfool"/><circle class="cbje69b4d"/></g>`,
		"fallback": "bitcoin-icons:bitaxe-outline",
	});
}

export default Component;
