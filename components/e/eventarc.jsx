import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p80wmyi7m.css';
import '../../css/q/q-umw5rlq.css';
import '../../css/e/eo_4r1b-s.css';
import '../../css/s/slss0bc8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p80wmyi7m"/><circle transform="rotate(-43.97 11.998 12.06)" class="q-umw5rlq"/><path class="eo_4r1b-s"/><path class="slss0bc8t"/>`,
		"fallback": "gcp:eventarc",
	});
}

export default Component;
