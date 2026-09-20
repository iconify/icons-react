import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlcu1mk_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="nlcu1mk_d"/>`,
		"fallback": "wordpress:institution",
	});
}

export default Component;
