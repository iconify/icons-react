import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_lfmoh3d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_lfmoh3d"/>`,
		"fallback": "carbon:container-image-push-pull",
	});
}

export default Component;
