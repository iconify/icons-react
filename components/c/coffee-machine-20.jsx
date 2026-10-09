import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykzdjc98c.css';
import '../../css/j/jb6-4ckfo.css';
import '../../css/o/o70pwlbdq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykzdjc98c"/><path class="jb6-4ckfo"/><path class="o70pwlbdq"/>`,
		"fallback": "energy-icons:coffee-machine-20",
	});
}

export default Component;
