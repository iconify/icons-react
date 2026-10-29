import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gclruccxz.css';
import '../../css/c/cjn1qbxvz.css';
import '../../css/m/mk10qibjs.css';
import '../../css/l/lc5e75zoy.css';
import '../../css/w/w2hy3bjtm.css';
import '../../css/h/h3mbwmriq.css';
import '../../css/x/x4zqg1bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gclruccxz wm-shadow"/><path class="cjn1qbxvz"/><path class="mk10qibjs"/><path class="lc5e75zoy"/><path class="w2hy3bjtm"/><path class="h3mbwmriq wm-shine"/><path class="x4zqg1bmy"/>`,
		"fallback": "withicons-plush:cloud",
	});
}

export default Component;
