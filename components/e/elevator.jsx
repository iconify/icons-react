import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kagvsxn9c.css';
import '../../css/j/j9h_gsb2r.css';
import '../../css/d/dz08tvnnh.css';
import '../../css/g/gfyb0903u.css';
import '../../css/i/ivo9kwj2s.css';
import '../../css/w/wjwxud1qk.css';
import '../../css/u/uyijhzp0d.css';
import '../../css/b/bh6-tgb9q.css';
import '../../css/d/dwbmz4m5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kagvsxn9c"/><path class="j9h_gsb2r"/><rect class="dz08tvnnh"/><circle class="gfyb0903u"/><path class="ivo9kwj2s"/><circle class="wjwxud1qk"/><path class="uyijhzp0d"/><circle class="bh6-tgb9q"/><path class="dwbmz4m5e"/></g>`,
		"fallback": "fluent-emoji-flat:elevator",
	});
}

export default Component;
