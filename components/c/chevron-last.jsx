import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihrukyb8a.css';
import '../../css/b/bio4c781y.css';
import '../../css/u/u9zxaeb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihrukyb8a wm-k"/><path class="bio4c781y wm-k"/><path class="u9zxaeb-g wm-a"/>`,
		"fallback": "withicons-bauhaus:chevron-last",
	});
}

export default Component;
