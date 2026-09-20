import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovjgg_gxh.css';
import '../../css/p/psfb6tk7k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary ovjgg_gxh"/><path class="psfb6tk7k"/>`,
		"fallback": "oui:app-auditbeat",
	});
}

export default Component;
