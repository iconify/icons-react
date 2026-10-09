import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp-n21b6g.css';
import '../../css/g/gnaan2b9l.css';
import '../../css/g/gadfch4xe.css';
import '../../css/k/kjg3jgbzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp-n21b6g"/><path class="gnaan2b9l"/><path class="gadfch4xe"/><path class="kjg3jgbzc"/>`,
		"fallback": "energy-icons:drill-20-bold",
	});
}

export default Component;
