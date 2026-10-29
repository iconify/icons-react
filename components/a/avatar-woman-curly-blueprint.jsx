import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/znh8c-bgt.css';
import '../../css/d/d505bpbvf.css';
import '../../css/y/ywk5os59u.css';
import '../../css/k/k9zy2hadm.css';
import '../../css/j/jn2x7fwoq.css';
import '../../css/t/togp5oepe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco znh8c-bgt"/><path class="d505bpbvf wm-deco"/><path class="wm-deco ywk5os59u"/><path class="k9zy2hadm wm-k"/><path class="jn2x7fwoq wm-a"/><path class="togp5oepe wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-curly-blueprint",
	});
}

export default Component;
