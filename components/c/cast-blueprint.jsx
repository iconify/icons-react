import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/omfl1-bnm.css';
import '../../css/g/g2xclxbug.css';
import '../../css/c/c_4afgbos.css';
import '../../css/a/awkth7x7q.css';
import '../../css/g/g__ysmb5y.css';
import '../../css/g/grfx19ckb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="omfl1-bnm wm-deco"/><path class="g2xclxbug wm-deco"/><path class="c_4afgbos wm-k"/><path class="awkth7x7q wm-a"/><path class="g__ysmb5y wm-k"/><path class="grfx19ckb wm-a"/></g>`,
		"fallback": "withicons:cast-blueprint",
	});
}

export default Component;
