import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmj02gb7z.css';
import '../../css/r/rp2vcfmfm.css';
import '../../css/w/wrl2pr1ap.css';
import '../../css/c/cj5o2dslp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmj02gb7z"/><path clip-rule="evenodd" class="rp2vcfmfm"/><path class="wrl2pr1ap"/><path class="cj5o2dslp"/></g>`,
		"fallback": "fluent-emoji-flat:cut-of-meat",
	});
}

export default Component;
