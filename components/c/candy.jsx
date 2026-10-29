import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbe467nxb.css';
import '../../css/a/a9xxhyt1p.css';
import '../../css/o/on6cd5bco.css';
import '../../css/j/jlgyac5de.css';
import '../../css/m/muxt2_2nu.css';
import '../../css/c/c4zfxmb9t.css';
import '../../css/x/x-_8cf4qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbe467nxb wm-shadow"/><path class="a9xxhyt1p wm-k"/><path class="on6cd5bco wm-k"/><path class="jlgyac5de wm-k"/><path class="muxt2_2nu wm-k"/><path class="c4zfxmb9t wm-k"/><path class="wm-shine x-_8cf4qb"/>`,
		"fallback": "withicons-pastel:candy",
	});
}

export default Component;
