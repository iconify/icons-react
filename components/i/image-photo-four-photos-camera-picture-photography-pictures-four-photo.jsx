import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ck_0hz9rc.css';
import '../../css/o/oe6fj1znh.css';
import '../../css/u/ufpvzccxq.css';
import '../../css/c/ck16tx8po.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="ck_0hz9rc"/><rect class="oe6fj1znh"/><rect class="ufpvzccxq"/><rect class="ck16tx8po"/></g>`,
		"fallback": "streamline:image-photo-four-photos-camera-picture-photography-pictures-four-photo",
	});
}

export default Component;
