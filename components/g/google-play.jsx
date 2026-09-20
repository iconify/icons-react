import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa6m-3b-n.css';
import '../../css/t/tszhuobqh.css';
import '../../css/z/zjx5z9b7a.css';
import '../../css/r/rzgmi4b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa6m-3b-n"/><path class="tszhuobqh"/><path class="zjx5z9b7a"/><path class="rzgmi4b0q"/>`,
		"fallback": "uim:google-play",
	});
}

export default Component;
