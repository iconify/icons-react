import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b4fnhb_7a.css';
import '../../css/l/l8rgqtb5j.css';
import '../../css/q/qxn9uebzv.css';
import '../../css/c/clqt9njub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b4fnhb_7a"/><path class="l8rgqtb5j"/><path class="qxn9uebzv"/><path class="clqt9njub"/></g>`,
		"fallback": "streamline-plump-color:button-power-1",
	});
}

export default Component;
