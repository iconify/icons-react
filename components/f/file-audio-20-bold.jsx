import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iccsyvk3j.css';
import '../../css/w/wao0dvbdb.css';
import '../../css/g/g-h11i9wd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iccsyvk3j"/><path class="wao0dvbdb"/><path class="g-h11i9wd"/>`,
		"fallback": "energy-icons:file-audio-20-bold",
	});
}

export default Component;
