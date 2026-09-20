import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-d8s3guq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-d8s3guq"/>`,
		"fallback": "tdesign:fingerprint",
	});
}

export default Component;
