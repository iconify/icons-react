import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbu76sy7z.css';
import '../../css/n/nr2v8obrq.css';
import '../../css/b/b-1ddne5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbu76sy7z"/><path class="nr2v8obrq"/><path class="b-1ddne5q"/>`,
		"fallback": "energy-icons:assembly-line-20-bold",
	});
}

export default Component;
