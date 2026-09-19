import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2l35xbjn.css';
import '../../css/r/rjff3k7ts.css';
import '../../css/a/as2xfh2ea.css';
import '../../css/z/z-s5yzwsp.css';
import '../../css/t/t_drb30wn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2l35xbjn"/><path class="rjff3k7ts"/><path class="as2xfh2ea"/><path class="z-s5yzwsp"/><path class="t_drb30wn"/>`,
		"fallback": "devicon:html5-wordmark",
	});
}

export default Component;
