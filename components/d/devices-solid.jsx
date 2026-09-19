import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dul5rebap.css';
import '../../css/w/wcgje-bvn.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 dul5rebap"/><path class="clr-i-solid clr-i-solid-path-2 wcgje-bvn"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:devices-solid",
	});
}

export default Component;
