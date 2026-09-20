import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmr0mfb7i.css';
import '../../css/v/vry7vqb6d.css';
import '../../css/s/s4v3_kbwn.css';
import '../../css/o/o704_4a0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmr0mfb7i"/><path class="vry7vqb6d"/><path class="s4v3_kbwn"/><path class="o704_4a0j"/></g>`,
		"fallback": "streamline-ultimate-color:dentistry-tooth",
	});
}

export default Component;
