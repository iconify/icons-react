import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt1a48lct.css';
import '../../css/z/z019-jv4q.css';
import '../../css/u/uam-iwbek.css';
import '../../css/w/wqfg_ypqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt1a48lct"/><path class="z019-jv4q"/><path class="uam-iwbek"/><path class="wqfg_ypqi"/>`,
		"fallback": "solar:bill-2-bold-duotone",
	});
}

export default Component;
