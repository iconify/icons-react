import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6dg4qbek.css';
import '../../css/h/hfnpruahq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6dg4qbek"/><path class="hfnpruahq"/>`,
		"fallback": "selfhst:amazon-s3-light",
	});
}

export default Component;
