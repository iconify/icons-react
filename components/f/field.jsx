import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6vor3s3p.css';
import '../../css/j/je6n-zzdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="h6vor3s3p"/><path class="je6n-zzdf"/></g>`,
		"fallback": "struq:field",
	});
}

export default Component;
