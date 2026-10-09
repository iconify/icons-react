import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2s83rbyk.css';
import '../../css/p/poctnlbvq.css';
import '../../css/g/gg86xpd5q.css';
import '../../css/s/swoyskbwx.css';
import '../../css/x/xbgpusb0f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2s83rbyk"/><path class="poctnlbvq"/><path class="gg86xpd5q"/><path class="swoyskbwx"/><path class="xbgpusb0f"/>`,
		"fallback": "energy-icons:car-share-20-bold",
	});
}

export default Component;
