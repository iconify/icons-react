import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/zp4lv4mif.css';
import '../../css/z/z92cejbkn.css';
import '../../css/j/jrxr2kb5a.css';
import '../../css/s/sxc-zkb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="zp4lv4mif"/><path class="z92cejbkn"/></g><path class="jrxr2kb5a"/><path class="sxc-zkb1d"/>`,
		"fallback": "solar:chevrons-left-right-bold-duotone",
	});
}

export default Component;
