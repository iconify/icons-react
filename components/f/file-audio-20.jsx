import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/b/btgf0khhi.css';
import '../../css/a/ar8noqkkg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="btgf0khhi"/><path class="ar8noqkkg"/>`,
		"fallback": "energy-icons:file-audio-20",
	});
}

export default Component;
