import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwgygxbhr.css';
import '../../css/s/s4iurdf1n.css';
import '../../css/l/li1rn3ywo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwgygxbhr"/><path class="s4iurdf1n"/><path class="li1rn3ywo"/>`,
		"fallback": "gcp:cloud-optimization-ai",
	});
}

export default Component;
