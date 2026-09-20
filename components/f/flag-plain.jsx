import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go7ozzb7r.css';
import '../../css/v/v2fjidcfm.css';
import '../../css/x/xq-w3syqm.css';
import '../../css/e/eul8dpbkk.css';
import '../../css/s/s1s-tacik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="go7ozzb7r"/><path class="v2fjidcfm"/><path class="xq-w3syqm"/><path class="eul8dpbkk"/><path class="s1s-tacik"/></g>`,
		"fallback": "streamline-ultimate-color:flag-plain",
	});
}

export default Component;
