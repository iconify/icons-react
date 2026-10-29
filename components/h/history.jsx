import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh9yc8bel.css';
import '../../css/c/cvftmybtu.css';
import '../../css/a/a5p2lhbsw.css';
import '../../css/q/qu25mcb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh9yc8bel wm-k"/><path class="cvftmybtu wm-k"/><path class="a5p2lhbsw wm-a"/><path class="qu25mcb2l wm-a"/>`,
		"fallback": "withicons-bauhaus:history",
	});
}

export default Component;
