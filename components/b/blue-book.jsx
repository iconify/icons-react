import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drphl9x-c.css';
import '../../css/q/q6evf3_3i.css';
import '../../css/g/g-vas9vud.css';
import '../../css/h/ha2s1vbvi.css';
import '../../css/a/ay8131wny.css';
import '../../css/g/ggi7iyb9z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drphl9x-c"/><path class="q6evf3_3i"/><path class="g-vas9vud"/><path class="ha2s1vbvi"/><circle class="ay8131wny"/><path class="ggi7iyb9z"/>`,
		"fallback": "openmoji:blue-book",
	});
}

export default Component;
