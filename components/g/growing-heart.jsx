import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdap5z71q.css';
import '../../css/i/ig3_1bbje.css';
import '../../css/d/dtavjx08k.css';
import '../../css/b/bu0uuvb8i.css';
import '../../css/u/utvt7mbxo.css';
import '../../css/o/om3fxcbpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdap5z71q"/><path class="ig3_1bbje"/><path class="dtavjx08k"/><path class="bu0uuvb8i"/><path class="utvt7mbxo"/><path class="om3fxcbpq"/>`,
		"fallback": "streamline-emojis:growing-heart",
	});
}

export default Component;
