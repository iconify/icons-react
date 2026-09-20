import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak2f22bpw.css';
import '../../css/r/ra-_foy0c.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/v/vvlaeog3m.css';
import '../../css/d/dr-vf7yak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ak2f22bpw"/><path class="ra-_foy0c"/><g class="av3m8fbrw"><path class="vvlaeog3m"/><path class="dr-vf7yak"/></g></g>`,
		"fallback": "tdesign:discount-list",
	});
}

export default Component;
