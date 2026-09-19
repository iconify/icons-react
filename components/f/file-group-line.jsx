import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpwqqcl2f.css';
import '../../css/j/jb87wbnfl.css';
import '../../css/j/jlrlflqsz.css';
import '../../css/v/vh6-wg-gl.css';
import '../../css/o/oh0uss8kv.css';
import '../../css/j/jzxyxbtne.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 mpwqqcl2f"/><path class="clr-i-outline clr-i-outline-path-2 jb87wbnfl"/><path class="clr-i-outline clr-i-outline-path-3 jlrlflqsz"/><path class="clr-i-outline clr-i-outline-path-4 vh6-wg-gl"/><path class="clr-i-outline clr-i-outline-path-5 oh0uss8kv"/><path class="clr-i-outline clr-i-outline-path-6 jzxyxbtne"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:file-group-line",
	});
}

export default Component;
