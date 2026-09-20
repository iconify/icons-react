import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdx5upbas.css';
import '../../css/y/ykggxvo8b.css';
import '../../css/e/eb3ikh_mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cdx5upbas"/><path class="ykggxvo8b"/><path clip-rule="evenodd" class="eb3ikh_mw"/>`,
		"fallback": "solar:condicioner-bold-duotone",
	});
}

export default Component;
