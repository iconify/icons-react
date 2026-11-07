import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhjotkbwy.css';
import '../../css/c/cm6wfkb8h.css';
import '../../css/e/e3wqdcuin.css';
import '../../css/p/pvfareb-d.css';
import '../../css/i/imf9zcbhu.css';
import '../../css/u/ujot87bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhjotkbwy"/><path class="cm6wfkb8h"/><path class="e3wqdcuin"/><path class="pvfareb-d"/><path clip-rule="evenodd" class="imf9zcbhu"/><path clip-rule="evenodd" class="ujot87bwi"/>`,
		"fallback": "solar:eye-scan-outline",
	});
}

export default Component;
