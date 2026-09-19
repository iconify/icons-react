import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7mpkzoaz.css';
import '../../css/r/rpnscybxj.css';
import '../../css/f/f2nivyzex.css';
import '../../css/g/gyad0vb_a.css';
import '../../css/s/sqowgsbmh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7mpkzoaz"/><path class="rpnscybxj"/><path class="f2nivyzex"/><path class="gyad0vb_a"/><path class="sqowgsbmh"/></g>`,
		"fallback": "fluent-emoji-flat:ice-hockey",
	});
}

export default Component;
