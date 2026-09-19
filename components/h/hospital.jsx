import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7v76fbki.css';
import '../../css/u/u-3l03b-a.css';
import '../../css/s/skd9ipjko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7v76fbki"/><path class="u-3l03b-a"/><path class="skd9ipjko"/>`,
		"fallback": "cil:hospital",
	});
}

export default Component;
