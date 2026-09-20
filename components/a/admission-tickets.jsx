import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb3_ltwpz.css';
import '../../css/w/w3wwgabxw.css';
import '../../css/t/tmw7p3amd.css';
import '../../css/y/ysbc8xu9o.css';
import '../../css/z/z6s52udqi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb3_ltwpz"/><g class="w3wwgabxw"><path class="tmw7p3amd"/><path class="ysbc8xu9o"/></g><path class="z6s52udqi"/>`,
		"fallback": "openmoji:admission-tickets",
	});
}

export default Component;
