import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al4_3sb6f.css';
import '../../css/q/qvr6hvb2x.css';
import '../../css/j/jjxxikh1n.css';
import '../../css/q/qogan0b5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al4_3sb6f"/><path class="qvr6hvb2x"/><path class="jjxxikh1n"/><path class="qogan0b5j"/>`,
		"fallback": "nonicons:c-sharp-16",
	});
}

export default Component;
