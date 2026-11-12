import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyun3dd4z.css';
import '../../css/h/hfnpruahq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyun3dd4z"/><path class="hfnpruahq"/>`,
		"fallback": "selfhst:amazon-s3-light",
	});
}

export default Component;
