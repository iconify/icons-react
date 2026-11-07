import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd3uuv79k.css';
import '../../css/d/dl-5kubnt.css';
import '../../css/d/du8lzsbmv.css';
import '../../css/k/kn41iccqi.css';
import '../../css/l/l-qdid21a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd3uuv79k"/><path class="dl-5kubnt"/><path class="du8lzsbmv"/><path class="kn41iccqi"/><path clip-rule="evenodd" class="l-qdid21a"/>`,
		"fallback": "solar:adhesive-plaster-2-outline",
	});
}

export default Component;
