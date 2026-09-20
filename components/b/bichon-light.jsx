import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-86hkn1j.css';
import '../../css/c/c2y1mvb0a.css';
import '../../css/f/f7amh2brp.css';
import '../../css/h/hoxfigbof.css';
import '../../css/z/z1cfigdhm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-86hkn1j"/><path class="c2y1mvb0a"/><path class="f7amh2brp"/><path class="hoxfigbof"/><path class="z1cfigdhm"/>`,
		"fallback": "selfhst:bichon-light",
	});
}

export default Component;
