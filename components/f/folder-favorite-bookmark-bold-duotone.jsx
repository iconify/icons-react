import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twg_fi4pi.css';
import '../../css/k/kd5gzltfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twg_fi4pi"/><path class="kd5gzltfq"/>`,
		"fallback": "solar:folder-favorite-bookmark-bold-duotone",
	});
}

export default Component;
