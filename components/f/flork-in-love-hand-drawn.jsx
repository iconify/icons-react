import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fapgedb6d.css';
import '../../css/d/d6rbg0-uq.css';
import '../../css/b/bexxgzmdx.css';
import '../../css/z/z4ecmib3n.css';
import '../../css/x/xho6-kbqm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fapgedb6d"/><path clip-rule="evenodd" class="d6rbg0-uq"/><path class="bexxgzmdx"/><path clip-rule="evenodd" class="z4ecmib3n"/><path clip-rule="evenodd" class="xho6-kbqm"/>`,
		"fallback": "streamline-memes:flork-in-love-hand-drawn",
	});
}

export default Component;
