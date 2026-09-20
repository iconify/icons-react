import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i26xof0tp.css';
import '../../css/f/ftovblz2s.css';
import '../../css/m/m2m9sdb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i26xof0tp"/><path class="ftovblz2s"/><path class="m2m9sdb6y"/></g>`,
		"fallback": "streamline-ultimate:audio-file",
	});
}

export default Component;
