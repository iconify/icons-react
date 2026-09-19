import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2c1jibvw.css';
import '../../css/k/knjrw5bqb.css';
import '../../css/r/rbsfszbmm.css';
import '../../css/d/d2cw7ybte.css';
import '../../css/a/aq9o__kzs.css';
import '../../css/s/soz25nbkm.css';
import '../../css/n/na49v2s9g.css';
import '../../css/w/wald5eb4m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2c1jibvw"/><path class="knjrw5bqb"/><path class="rbsfszbmm"/><path class="d2cw7ybte"/><path class="aq9o__kzs"/><path class="soz25nbkm"/><path class="na49v2s9g"/><path class="wald5eb4m"/></g>`,
		"fallback": "glyphs-poly:arrows-compress-quad",
	});
}

export default Component;
