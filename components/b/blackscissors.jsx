import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaoxfqbbl.css';
import '../../css/f/fh4kjpb7i.css';
import '../../css/q/q4s8-jw3r.css';
import '../../css/r/rf907sb4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaoxfqbbl"/><path class="fh4kjpb7i"/><path class="q4s8-jw3r"/><path class="rf907sb4j"/>`,
		"fallback": "fxemoji:blackscissors",
	});
}

export default Component;
