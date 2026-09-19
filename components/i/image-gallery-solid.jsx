import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcpzljbeb.css';
import '../../css/j/jn9mjsb2g.css';
import '../../css/o/o9sdgwbjd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcpzljbeb clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 jn9mjsb2g"/><path class="clr-i-solid clr-i-solid-path-3 o9sdgwbjd"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:image-gallery-solid",
	});
}

export default Component;
