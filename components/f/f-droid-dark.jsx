import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7261t-ji.css';
import '../../css/u/u_h0ofbbp.css';
import '../../css/w/w96h6ywld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7261t-ji"/><path class="u_h0ofbbp"/><path class="w96h6ywld"/>`,
		"fallback": "selfhst:f-droid-dark",
	});
}

export default Component;
