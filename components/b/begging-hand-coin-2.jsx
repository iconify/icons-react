import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a1u02hwni.css';
import '../../css/s/sn6-ywpbg.css';
import '../../css/i/i9sz-2b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a1u02hwni"/><path class="sn6-ywpbg"/><path class="i9sz-2b0q"/></g>`,
		"fallback": "streamline-ultimate:begging-hand-coin-2",
	});
}

export default Component;
