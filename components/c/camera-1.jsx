import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kezo00-ru.css';
import '../../css/h/hringyqtb.css';
import '../../css/s/sbry_navz.css';
import '../../css/i/i34px_bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kezo00-ru"/><path class="hringyqtb"/><path class="sbry_navz"/><path class="i34px_bie"/></g>`,
		"fallback": "tdesign:camera-1",
	});
}

export default Component;
