import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kyj714bbb.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/n/naeb0abdw.css';
import '../../css/c/clf7bkh7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kyj714bbb"/><path class="qr4ochb5c wm-s"/><path class="naeb0abdw"/><path class="clf7bkh7f wm-a"/></g>`,
		"fallback": "withicons:image-off-duo",
	});
}

export default Component;
