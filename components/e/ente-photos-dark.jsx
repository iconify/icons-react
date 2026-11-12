import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2159gbjp.css';
import '../../css/f/fro_cac9v.css';
import '../../css/j/j-esetb3v.css';
import '../../css/p/p098uujwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2159gbjp"/><path class="fro_cac9v"/><path class="j-esetb3v"/><path class="p098uujwe"/>`,
		"fallback": "selfhst:ente-photos-dark",
	});
}

export default Component;
