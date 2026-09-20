import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/t/t5kuevs6k.css';
import '../../css/p/pgaah8bvy.css';
import '../../css/y/ypb3ww6cw.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGedK67dUX"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><rect class="t5kuevs6k"/><path class="pgaah8bvy"/><path clip-rule="evenodd" class="ypb3ww6cw"/></g></mask></defs><circle mask="url(#SVGedK67dUX)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:battery-circle-filled",
	});
}

export default Component;
