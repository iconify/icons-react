import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnsubub4w.css';
import '../../css/s/sao36y9_e.css';
import '../../css/w/wwiawhboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tnsubub4w"/><path class="sao36y9_e"/><path clip-rule="evenodd" class="wwiawhboc"/></g>`,
		"fallback": "reicon:file-zip-filled",
	});
}

export default Component;
