import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7o35hbpj.css';
import '../../css/d/dmbeawb_o.css';
import '../../css/r/rg7-mwhum.css';
import '../../css/a/ar7iswbpi.css';
import '../../css/l/lfqw0vdmm.css';
import '../../css/g/gjk35jb3m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7o35hbpj"/><path class="dmbeawb_o"/><g class="rg7-mwhum"><path class="ar7iswbpi"/><path class="lfqw0vdmm"/></g><path class="gjk35jb3m"/>`,
		"fallback": "thesvg-color:aarch64",
	});
}

export default Component;
