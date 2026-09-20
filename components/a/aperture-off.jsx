import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt2id7bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt2id7bmu"/>`,
		"fallback": "tabler:aperture-off",
	});
}

export default Component;
