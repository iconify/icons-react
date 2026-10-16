import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6t1okvbu.css';
import '../../css/w/wknodb7mp.css';
import '../../css/h/h-9qdj1gj.css';
import '../../css/z/zfijvfb4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6t1okvbu"/><path class="wknodb7mp"/><path class="h-9qdj1gj"/><path class="zfijvfb4c"/>`,
		"fallback": "energy-icons:growth-48-bold",
	});
}

export default Component;
