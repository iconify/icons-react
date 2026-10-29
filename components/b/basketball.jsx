import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-vd9z53y.css';
import '../../css/b/bwdisqe6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-vd9z53y wm-a"/><path class="bwdisqe6r wm-a"/>`,
		"fallback": "withicons-bauhaus:basketball",
	});
}

export default Component;
