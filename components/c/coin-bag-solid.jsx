import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxq0qgbct.css';
import '../../css/k/kq9bdlg_s.css';
import '../../css/b/bdxly-bkz.css';
import '../../css/h/hlvx0pb2s.css';
import '../../css/x/xi9l_d0vo.css';
import '../../css/q/qsp97v-pr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 hxq0qgbct"/><path class="clr-i-solid clr-i-solid-path-2 kq9bdlg_s"/><path class="bdxly-bkz clr-i-solid clr-i-solid-path-3"/><path class="clr-i-solid clr-i-solid-path-4 hlvx0pb2s"/><path class="clr-i-solid clr-i-solid-path-5 xi9l_d0vo"/><path class="clr-i-solid clr-i-solid-path-6 qsp97v-pr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:coin-bag-solid",
	});
}

export default Component;
