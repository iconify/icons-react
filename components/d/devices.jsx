import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b69dij5rx.css';
import '../../css/m/muxrmeneg.css';
import '../../css/o/oqmofb2lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b69dij5rx"/><path class="muxrmeneg"/><path class="oqmofb2lj"/></g>`,
		"fallback": "iconaut:devices",
	});
}

export default Component;
