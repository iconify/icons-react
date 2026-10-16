import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx59guuve.css';
import '../../css/g/gavq1ny5h.css';
import '../../css/c/c_8pj9aah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx59guuve"/><path class="gavq1ny5h"/><path class="c_8pj9aah"/>`,
		"fallback": "energy-icons:clipboard-copy-48",
	});
}

export default Component;
