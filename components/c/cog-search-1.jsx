import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn7hkr7xs.css';
import '../../css/h/h6amcsb_g.css';
import '../../css/q/qcjj6j_hw.css';
import '../../css/o/o9f0v3r0g.css';
import '../../css/a/abb89mb_t.css';
import '../../css/k/kfrc1rb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bn7hkr7xs"/><path class="h6amcsb_g"/><path class="qcjj6j_hw"/><path class="o9f0v3r0g"/><path class="abb89mb_t"/><path class="kfrc1rb4w"/></g>`,
		"fallback": "streamline-ultimate-color:cog-search-1",
	});
}

export default Component;
