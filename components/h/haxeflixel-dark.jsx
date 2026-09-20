import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/c/c310x3bwe.css';
import '../../css/d/dpv7ulb3e.css';
import '../../css/f/fed5yhuvy.css';
import '../../css/m/md7u2ccyd.css';
import '../../css/n/nhbrc8bbj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="c310x3bwe"/><path class="dpv7ulb3e"/><path class="fed5yhuvy"/><path class="md7u2ccyd"/><path class="nhbrc8bbj"/></g>`,
		"fallback": "skill-icons:haxeflixel-dark",
	});
}

export default Component;
