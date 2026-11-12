import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-8zeib9o.css';
import '../../css/g/gncr9mbaq.css';
import '../../css/s/s8i3jsm2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v-8zeib9o"/><path class="gncr9mbaq"/><path class="s8i3jsm2k"/>`,
		"fallback": "selfhst:beets-flask-light",
	});
}

export default Component;
