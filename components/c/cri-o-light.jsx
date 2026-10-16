import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpbtlo3gr.css';
import '../../css/m/mqpx2x9bg.css';
import '../../css/o/omvd1c9yy.css';
import '../../css/w/w0z01g2cg.css';
import '../../css/m/m94q-dbte.css';

const viewBox = {"width":370.5,"height":362,"left":-5.38,"top":-1.13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpbtlo3gr"/><path class="mqpx2x9bg"/><path class="omvd1c9yy"/><path class="w0z01g2cg"/><path class="m94q-dbte"/>`,
		"fallback": "thesvg-color:cri-o-light",
	});
}

export default Component;
