import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w_uybke.css';
import '../../css/a/apggtqbru.css';
import '../../css/g/giaponbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w_uybke"/><path class="apggtqbru"/><path class="giaponbgv"/>`,
		"fallback": "solar:document-bold-duotone",
	});
}

export default Component;
