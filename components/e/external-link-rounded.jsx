import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/p19e3a.css';
import '../../css/e/erpyod.css';
import '../../css/a/avyd9d.css';
import '../../css/s/so-from-36.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c p19e3a"/><path class="a0m25c erpyod"/><path class="a0m25c avyd9d"/>`,
		"fallback": "line-md:external-link-rounded",
	});
}

export default Component;
