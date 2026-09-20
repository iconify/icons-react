import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqx49sbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqx49sbfq"/>`,
		"fallback": "keyline-icons:circle-swiss-franc-sharp-fill",
	});
}

export default Component;
