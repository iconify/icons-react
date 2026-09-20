import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ys3zi_b1h.css';
import '../../css/s/sk2dmjbna.css';
import '../../css/t/tpdqzebpe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ys3zi_b1h"/><path clip-rule="evenodd" class="sk2dmjbna"/><path class="tpdqzebpe"/></g>`,
		"fallback": "streamline-plump:card-game-diamond",
	});
}

export default Component;
