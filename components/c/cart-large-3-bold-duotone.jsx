import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0u7hix8w.css';
import '../../css/y/ylj916f_v.css';
import '../../css/v/vbk7ktz_f.css';
import '../../css/m/mok34v4tz.css';
import '../../css/u/ud_7cfbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0u7hix8w"/><path class="ylj916f_v"/><path class="vbk7ktz_f"/><path class="mok34v4tz"/><path class="ud_7cfbnu"/>`,
		"fallback": "solar:cart-large-3-bold-duotone",
	});
}

export default Component;
