import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyx9zdb1f.css';
import '../../css/w/w484zvkie.css';
import '../../css/s/ssezr3bse.css';
import '../../css/x/x2ql91bbd.css';

const viewBox = {"width":87,"height":100.001};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyx9zdb1f"/><path class="w484zvkie"/><path class="ssezr3bse"/><path class="x2ql91bbd"/>`,
		"fallback": "flat-ui:google",
	});
}

export default Component;
