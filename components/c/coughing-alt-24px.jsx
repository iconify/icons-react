import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmtpulbvd.css';
import '../../css/l/lnnv_jtap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zmtpulbvd"/><path class="lnnv_jtap"/></g>`,
		"fallback": "healthicons:coughing-alt-24px",
	});
}

export default Component;
