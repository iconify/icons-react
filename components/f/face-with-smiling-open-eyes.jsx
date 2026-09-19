import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/b/b4jtc2s1i.css';
import '../../css/x/xj-iu9b1e.css';
import '../../css/s/sowf7ny1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="b4jtc2s1i"/><circle class="xj-iu9b1e"/><circle class="sowf7ny1u"/></g>`,
		"fallback": "icon-park:face-with-smiling-open-eyes",
	});
}

export default Component;
