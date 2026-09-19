import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuhh6ccor.css';
import '../../css/r/rk_ebkb0f.css';
import '../../css/g/g_wkhkt4o.css';
import '../../css/d/dgzseabdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuhh6ccor"/><path class="rk_ebkb0f"/><path class="g_wkhkt4o"/><path class="dgzseabdf"/>`,
		"fallback": "bx:bxl-go-lang",
	});
}

export default Component;
