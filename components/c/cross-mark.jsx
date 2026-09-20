import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp88epbqj.css';
import '../../css/r/rcznhb4ez.css';
import '../../css/g/geslw-b3s.css';
import '../../css/r/r2lv70bmu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp88epbqj"/><path class="rcznhb4ez"/><path class="geslw-b3s"/><path class="r2lv70bmu"/>`,
		"fallback": "streamline-emojis:cross-mark",
	});
}

export default Component;
