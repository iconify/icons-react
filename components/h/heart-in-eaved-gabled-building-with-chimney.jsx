import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq-rkobcn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq-rkobcn"/>`,
		"fallback": "pinhead:heart-in-eaved-gabled-building-with-chimney",
	});
}

export default Component;
