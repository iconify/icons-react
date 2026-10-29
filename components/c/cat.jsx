import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir44ts29y.css';
import '../../css/q/qs6i_jb_m.css';
import '../../css/d/dm2_wt_sl.css';
import '../../css/c/cy6rzqb0a.css';
import '../../css/p/p7up84i1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir44ts29y wm-k"/><path class="qs6i_jb_m wm-k"/><path class="dm2_wt_sl wm-k"/><path class="cy6rzqb0a wm-a"/><path class="p7up84i1h wm-a"/>`,
		"fallback": "withicons-bauhaus:cat",
	});
}

export default Component;
