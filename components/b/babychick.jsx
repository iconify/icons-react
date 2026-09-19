import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsoix_jkw.css';
import '../../css/f/f_yv0yb3g.css';
import '../../css/p/pr0kgdb0u.css';
import '../../css/c/cvziz8baj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsoix_jkw"/><path class="f_yv0yb3g"/><path class="pr0kgdb0u"/><path class="cvziz8baj"/>`,
		"fallback": "fxemoji:babychick",
	});
}

export default Component;
