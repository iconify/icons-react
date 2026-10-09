import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyvjvhb1l.css';
import '../../css/z/zrqlkvb4c.css';
import '../../css/o/oov7epbkt.css';
import '../../css/h/hh-vtxt5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyvjvhb1l"/><path class="zrqlkvb4c"/><path class="oov7epbkt"/><path class="hh-vtxt5b"/>`,
		"fallback": "energy-icons:cold-storage-20",
	});
}

export default Component;
