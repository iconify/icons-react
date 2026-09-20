import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/o6egmgbkk.css';
import '../../css/i/i94hfmkng.css';
import '../../css/b/ba7ufw_db.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="o6egmgbkk"/><path class="i94hfmkng"/><path class="ba7ufw_db"/></g>`,
		"fallback": "streamline-plump-color:insert-column",
	});
}

export default Component;
