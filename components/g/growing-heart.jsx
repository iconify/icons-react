import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyp5ubbco.css';
import '../../css/v/vz71d8bte.css';
import '../../css/l/lziqluudw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jyp5ubbco"/><path class="vz71d8bte"/><path class="lziqluudw"/></g>`,
		"fallback": "fluent-emoji-flat:growing-heart",
	});
}

export default Component;
