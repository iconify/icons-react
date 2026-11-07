import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajralqjgp.css';
import '../../css/s/siai_tb_r.css';
import '../../css/p/p1472sozf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajralqjgp"/><path class="siai_tb_r"/><path class="p1472sozf"/>`,
		"fallback": "solar:inbox-unread-bold-duotone",
	});
}

export default Component;
