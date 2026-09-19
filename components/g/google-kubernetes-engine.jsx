import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4a081laz.css';
import '../../css/s/soh0llxrd.css';
import '../../css/f/f59zn7b2d.css';
import '../../css/x/x0-j_jb7w.css';
import '../../css/c/c-mizp4ta.css';
import '../../css/f/fuhbdfl6d.css';
import '../../css/e/etou4pd5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4a081laz"/><path class="soh0llxrd"/><path class="f59zn7b2d"/><path class="x0-j_jb7w"/><path class="c-mizp4ta"/><path class="fuhbdfl6d"/><path class="etou4pd5d"/>`,
		"fallback": "gcp:google-kubernetes-engine",
	});
}

export default Component;
