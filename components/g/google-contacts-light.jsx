import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9a_esbwi.css';
import '../../css/s/sk-8-kkto.css';
import '../../css/w/we___fbjz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9a_esbwi"/><path class="sk-8-kkto"/><path class="we___fbjz"/>`,
		"fallback": "selfhst:google-contacts-light",
	});
}

export default Component;
