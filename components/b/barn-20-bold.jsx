import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0106fblp.css';
import '../../css/v/vccof2b9q.css';
import '../../css/b/b8grcvrjy.css';
import '../../css/m/mtpfwtbxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0106fblp"/><path class="vccof2b9q"/><path class="b8grcvrjy"/><path class="mtpfwtbxh"/>`,
		"fallback": "energy-icons:barn-20-bold",
	});
}

export default Component;
