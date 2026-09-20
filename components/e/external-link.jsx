import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/et8gjv.css';
import '../../css/e/erpyod.css';
import '../../css/a/avyd9d.css';
import '../../css/s/so-from-42.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c et8gjv"/><path class="a0m25c erpyod"/><path class="a0m25c avyd9d"/>`,
		"fallback": "line-md:external-link",
	});
}

export default Component;
