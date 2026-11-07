import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w_uybke.css';
import '../../css/z/z8aa66xdv.css';
import '../../css/i/ii6lc6bis.css';
import '../../css/y/ywvami7tw.css';
import '../../css/x/xomgbsvxd.css';
import '../../css/r/rla1avb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w_uybke"/><path class="z8aa66xdv"/><path class="ii6lc6bis"/><path class="ywvami7tw"/><path class="xomgbsvxd"/><path class="rla1avb2i"/>`,
		"fallback": "solar:document-add-bold-duotone",
	});
}

export default Component;
