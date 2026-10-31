import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rpx4jfbtr.css';
import '../../css/u/u7kol1bgd.css';
import '../../css/e/ehdvezbbi.css';
import '../../css/x/x7a1kcb7v.css';
import '../../css/u/u8hilpblx.css';
import '../../css/m/mmdv3mbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rpx4jfbtr wm-shadow"/><path class="u7kol1bgd"/><path class="ehdvezbbi"/><path class="x7a1kcb7v"/><path class="u8hilpblx"/><path class="mmdv3mbfn"/></g>`,
		"fallback": "withicons-retro:chef-hat",
	});
}

export default Component;
