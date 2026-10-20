import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di__cabvm.css';
import '../../css/j/j8d93dwgj.css';
import '../../css/h/hxtxelb0w.css';
import '../../css/s/sqfcwibec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di__cabvm"/><path class="j8d93dwgj"/><path class="hxtxelb0w"/><path class="sqfcwibec"/>`,
		"fallback": "energy-icons:devices-48",
	});
}

export default Component;
