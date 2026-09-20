import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hj49fqb2n.css';
import '../../css/z/z2kaxubju.css';
import '../../css/f/f7a06bbbb.css';
import '../../css/t/tz2wjbb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hj49fqb2n"/><path class="z2kaxubju"/><path class="f7a06bbbb"/><path class="tz2wjbb3f"/></g>`,
		"fallback": "streamline-logos:email-logo",
	});
}

export default Component;
