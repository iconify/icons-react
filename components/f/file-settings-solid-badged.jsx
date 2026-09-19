import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmf0ecbhq.css';
import '../../css/c/cbjx-lv-q.css';
import '../../css/v/vwqaxbc0v.css';
import '../../css/a/addbdeb0z.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-1--badged lmf0ecbhq"/><path class="cbjx-lv-q clr-i-solid--badged clr-i-solid-path-2--badged"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged vwqaxbc0v"/><path class="addbdeb0z clr-i-solid--badged clr-i-solid-path-4--badged"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:file-settings-solid-badged",
	});
}

export default Component;
