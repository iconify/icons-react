import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1u67tbld.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1u67tbld"/>`,
		"fallback": "academicons:dataverse",
	});
}

export default Component;
