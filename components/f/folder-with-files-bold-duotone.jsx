import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd5gzltfq.css';
import '../../css/h/ha8ssyboi.css';
import '../../css/f/ftsububcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd5gzltfq"/><path class="ha8ssyboi"/><path class="ftsububcj"/>`,
		"fallback": "solar:folder-with-files-bold-duotone",
	});
}

export default Component;
